import { Router } from "express";
import TestRouter from "./testRouter.js";

const router = Router();

router.use("/test", TestRouter);

export default router;
