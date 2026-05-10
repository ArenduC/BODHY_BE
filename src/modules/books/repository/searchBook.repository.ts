import prisma from "../../../config/database";
import { Prisma } from "@prisma/client";

type SearchBooksParams = {
  searchObject: string;
  page?: number;
  limit?: number;
};

export class SearchBooksRepository {
  async searchBooks({
    searchObject,
    page = 1,
    limit = 20,
  }: SearchBooksParams) {
    const skip = (page - 1) * limit;

    const where: Prisma.booksWhereInput = {
      OR: [
        {
          title: {
            contains: searchObject,
            mode: "insensitive",
          },
        },

        {
          isbn: {
            contains: searchObject,
            mode: "insensitive",
          },
        },

        {
          authors: {
            is: {
              name: {
                contains: searchObject,
                mode: "insensitive",
              },
            },
          },
        },

        {
          book_metadata: {
            is: {
              language_code: {
                contains: searchObject,
                mode: "insensitive",
              },
            },
          },
        },

        {
          book_content: {
            is: {
              tags: {
                has: searchObject,
              },
            },
          },
        },
      ],
    };

    const [books, total] = await Promise.all([
      prisma.books.findMany({
        skip,
        take: limit,

        where,

        select: {
          id: true,
          external_id: true,
          title: true,
          isbn: true,
          created_at: true,

          authors: {
            select: {
              name: true,
            },
          },

          book_metadata: {
            select: {
              language_code: true,
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
              genres: true,
              cover_url: true,
            },
          },
        },
      }),

      prisma.books.count({
        where,
      }),
    ]);

    return {
      books,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}