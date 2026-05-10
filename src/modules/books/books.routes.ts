import { Router } from "express";
import { BooksController } from "./books.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";


const router = Router();

const controller = new BooksController();

router.get("/", controller.getBooks);
router.post(
  "/",asyncHandler(controller.getSearchBooks)
);

export default router;