import { Router } from "express";
import { userHandlers } from "../controllers/index.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = Router();

router.get("/profile", authenticate, userHandlers.getProfile);

router.post("/change-password", authenticate, userHandlers.changePassword);

export default router;
