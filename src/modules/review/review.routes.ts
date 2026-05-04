import { Router } from "express";

import { ReviewController } from "./review.controller";

import { validate } from "../../common/middleware/validate";

import { createReviewSchema } from "./review.schema";

import { asyncHandler } from "../../common/utils/asyncHandler";

const router = Router();

const controller = new ReviewController();

router.post(
  "/",
  validate(createReviewSchema),
  asyncHandler(controller.createReview)
);

export default router;