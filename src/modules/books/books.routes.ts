import { Router } from "express";
import { BooksController } from "./books.controller";

const router = Router();

const controller = new BooksController();

router.get("/", controller.getBooks);

export default router;