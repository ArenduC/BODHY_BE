import { z } from "zod";

export const createReviewSchema = z.object({
  title: z.string().min(1, "Title is required"),

  isbn: z.string().min(5, "ISBN is required"),

  authorId: z.string().uuid("Invalid author ID"),

  publisherId: z.string().uuid().optional(),
});