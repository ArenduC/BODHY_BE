import { BooksRepository } from "./books.repository";
import { SearchBooksRepository } from "./repository/searchBook.repository";

const booksRepository = new BooksRepository();
const searchBookRepository = new SearchBooksRepository();

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


    async getSearchBooks({
    searchObject,
    page = 1,
    limit = 50,
    sort,
  }: {
    searchObject: string;
    page?: number;
    limit?: number;
    sort?: string;
  }) {
    return searchBookRepository.searchBooks({
      searchObject,
      page,
      limit,
    });
  }



}


