import { Router } from "express";
import TestRouter from "./test.route.js";

const router = Router();

router.use("/test", TestRouter);

export default router;
