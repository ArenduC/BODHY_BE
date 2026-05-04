import prisma from "../../config/database";
import { CreateReviewBody } from "./review.types";

export class ReviewRepository {
  async createReview(data: CreateReviewBody) {
    return {
      data: {
        title: data.title,
        isbn: data.isbn,
        author_id: data.authorId,
        publisher_id: data.publisherId,
      },
    };
  }
}