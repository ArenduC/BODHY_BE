import { PrismaClient } from "@prisma/client";
import logger from "../common/utils/logger";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();

    logger.info("Database connected successfully");
  } catch (error) {
    logger.error("Database connection failed");

    console.error(error);

    process.exit(1);
  }
};

export default prisma;