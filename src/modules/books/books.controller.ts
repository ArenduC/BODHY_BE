import { Request, Response } from "express";
import { BooksService } from "./books.service";

const booksService = new BooksService();

export class BooksController {
  async getBooks(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;

    const sort = String(req.query.sort || "recent");

    const result = await booksService.getBooks({
      page,
      limit,
      sort,
    });

    return res.json(result);
  }
}