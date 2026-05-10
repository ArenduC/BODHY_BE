import { Request, Response } from "express";
import { BooksService } from "./books.service";
import { successResponse } from "../../common/utils/apiResponse";

const booksService = new BooksService();

export class BooksController {
  async getBooks(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;

    const sort = String(req.query.sort || "recent");

    const result = await booksService.getBooks({
      page,
      limit,
      sort,
    });


    return res.status(201).json(
          successResponse({
            message: "Book created successfully",
            data: result,
          })
        );
  }


async getSearchBooks(req: Request, res: Response) {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const sort = String(req.query.sort || "recent");

  const searchObject = String(req.query.searchObject || "");

  const result = await booksService.getSearchBooks({
    searchObject,
    page,
    limit,
    sort,
  });

  return res.status(200).json(
    successResponse({
      message: "Books fetched successfully",
      data: result,
    })
  );
}
}