import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDB } from "./config/database";
import logger from "./common/utils/logger";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    logger.info(
      `Server running on http://localhost:${PORT}`
    );
  });
};

startServer();