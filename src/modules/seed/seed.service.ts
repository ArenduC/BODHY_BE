import prisma from "../../config/database";
import { MOCK_BOOKS } from "../../data/mockData";

export class SeedService {
  async seedBooks() {
    for (const book of MOCK_BOOKS) {
      await prisma.book.upsert({
        where: {
          isbn: book.isbn,
        },

        update: {},

        create: {
          title: book.title,
          isbn: book.isbn,
        },
      });
    }

    return true;
  }
}