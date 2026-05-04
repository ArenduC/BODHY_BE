import { BooksRepository } from "./books.repository";

const booksRepository = new BooksRepository();

export class BooksService {
  async getBooks({
    page,
    limit,
    sort,
  }: {
    page: number;
    limit: number;
    sort: string;
  }) {
    return booksRepository.getBooks({
      page,
      limit,
      sort,
    });
  }
}