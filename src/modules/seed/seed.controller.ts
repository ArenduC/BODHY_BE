import { Request, Response } from "express";
import { SeedService } from "./seed.service";

const seedService = new SeedService();

export class SeedController {
  async seed(req: Request, res: Response) {
    await seedService.seedBooks();

    return res.json({
      success: true,
      message: "Database seeded",
    });
  }
}