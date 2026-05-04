export interface CreateReviewBody {
  title: string;
  isbn: string;
  authorId: string;
  publisherId?: string;
}