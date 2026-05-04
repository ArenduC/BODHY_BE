import { Request, Response } from "express";

import { ReviewService } from "./review.service";

import { CreateReviewBody } from "./review.types";

import { successResponse } from "../../common/utils/apiResponse";

const reviewService = new ReviewService();

export class ReviewController {
  async createReview(
    req: Request<{}, {}, CreateReviewBody>,
    res: Response
  ) {
    const book = await reviewService.createReview(req.body);

    return res.status(201).json(
      successResponse({
        message: "Book created successfully",
        data: book,
      })
    );
  }
}