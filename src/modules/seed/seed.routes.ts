import { Router } from "express";
import { SeedController } from "./seed.controller";

const router = Router();

const controller = new SeedController();

router.get("/", controller.seed);

export default router;