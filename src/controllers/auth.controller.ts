import type { Request, RequestHandler, Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { authServices } from "../services/index.js";
import { RESPONSES } from "../constants/index.js";

const registerHandler: RequestHandler = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		const result = await authServices.registerUser(req.body);
		const response = RESPONSES.CREATED(
			"User registered successfully!",
			result,
		);
		res.status(response.statusCode).json(response.toJSON());
	},
);

const loginHandler: RequestHandler = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		const result = await authServices.loginUser(req.body);
		const response = RESPONSES.OK("User logged in successfully!", result);
		res.status(response.statusCode).json(response.toJSON());
	},
);

const logoutHandler: RequestHandler = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		const result = await authServices.logoutUser();
		const response = RESPONSES.OK("User logged out successfully!", result);
		res.status(response.statusCode).json(response.toJSON());
	},
);

export const authHandlers = { registerHandler, loginHandler, logoutHandler };
