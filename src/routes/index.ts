import { Router } from "express";
import testRouter from "./test.route.js";
import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";

const router = Router();

router.use("/test", testRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
