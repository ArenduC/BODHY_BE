export interface Book {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  publisher?: string;
  description: string;
  coverUrl?: string;
  category: string;
  isbn: string;
  averageRating: number;
  reviewCount: number;
  availableCopies: number;
  totalCopies: number;
  tags: string[];
  // Stats
  ratingDist5?: number;
  ratingDist4?: number;
  ratingDist3?: number;
  ratingDist2?: number;
  ratingDist1?: number;
  ratingDistTotal?: number;
  // Metadata
  publishYear?: number;
  publishMonth?: number;
  publishDay?: number;
  languageCode?: string;
  pagesNumber?: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  photoUrl: string;
  birthDate?: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  photoUrl: string;
  bio: string;
  points: number;
  level: number;
  inventory: string[]; // book ids
  achievements: string[];
  preferredLanguage: string;
}

export interface BorrowEntry {
  id: string;
  userId: string;
  bookId: string;
  status: 'borrowed' | 'returned' | 'overdue';
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
}

export interface Review {
  id: string;
  userId: string;
  userDisplayName: string;
  bookId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
