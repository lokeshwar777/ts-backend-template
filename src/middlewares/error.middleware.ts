import type {
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from "express";
import APIError from "../utils/APIError.js";

export const globalErrorHandler: ErrorRequestHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	if (err instanceof APIError) {
		res.status(err.statusCode).json(err.toJSON());
		return;
	}
	console.log(`Unhandled error :-> ${err}`);
	res.status(500).json({ error: "Internal Server Error" });
};
