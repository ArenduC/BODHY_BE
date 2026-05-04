import { ReviewRepository } from "./review.repository";
import { CreateReviewBody } from "./review.types";

const reviewRepository = new ReviewRepository();

export class ReviewService {
  async createReview(data: CreateReviewBody) {
    return reviewRepository.createReview(data);
  }
}