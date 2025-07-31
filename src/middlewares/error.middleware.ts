import type {
	Request,
	Response,
	ErrorRequestHandler,
	NextFunction,
} from "express";
import APIError from "../utils/APIError.js";
import { ERRORS } from "../constants/index.js";

export const globalErrorHandler: ErrorRequestHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const error = err instanceof APIError ? err : ERRORS.INTERNAL_SERVER_ERROR;

	// inject error so that pino-http can recognise it
	res.err = error;

	// optional logging for safety but redundancy
	// req.log.error(error, `Error : ${error.name} - ${error.message}`);

	res.status(error.statusCode).json(error.toJSON());
};
