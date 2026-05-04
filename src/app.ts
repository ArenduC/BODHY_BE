import express from "express";
import cors from "cors";

import { requestLogger } from "./common/middleware/request-logger";

import healthRoutes from "./routes/health.routes";
import seedRoutes from "./modules/seed/seed.routes";
import booksRoutes from "./modules/books/books.routes";
import reviewRoutes from "./modules/review/review.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/health", healthRoutes);
app.use("/seed", seedRoutes);
app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/review", reviewRoutes);

export default app;