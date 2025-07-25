import type {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from "express";
import APIError from "../utils/APIError.js";

export const jsonErrorResponder: ErrorRequestHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	// xhr = XMLHttpRequest (AJAX), req.headers is for fetch API -> `Content-Type`:'application/json`
	const expectsJSON =
		req.xhr || req.headers.accept?.includes("json") || req.is("json");

	if (!expectsJSON) {
		return next(err);
	}

	const apiError =
		err instanceof APIError
			? err
			: new APIError("something went wrong on client!");

	console.error("client-side error", apiError); // helpful for debugging

	res.status(apiError.statusCode).json(apiError.toJSON());
};
