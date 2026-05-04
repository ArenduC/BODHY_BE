import prisma from "../../config/database";

export class BooksRepository {
  async getBooks({
    page,
    limit,
    sort,
  }: {
    page: number;
    limit: number;
    sort: string;
  }) {
    const skip = (page - 1) * limit;

    let orderBy: any = {
      created_at: "desc",
    };

    if (sort === "trending") {
      orderBy = {
        book_statistics: {
          review_count: "desc",
        },
      };
    }

    const books = await prisma.books.findMany({
      skip,
      take: limit,

      orderBy,

      select: {
        id: true,
        external_id: true,
        title: true,
        isbn: true,
        author_id: true,
        publisher_id: true,
        created_at: true,

        authors: {
          select: {
            name: true,
          },
        },

        book_statistics: {
          select: {
            review_count: true,
            average_rating: true,
          },
        },

        book_content: {
          select: {
            tags: true,
            cover_url: true,
            description: true,
          },
        },
      },
    });

    return books;
  }
}