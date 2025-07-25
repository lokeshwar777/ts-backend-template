import type {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from "express";

export const logErrors: ErrorRequestHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (err instanceof Error) {
		// log full error stack tree if present
		console.error(`[Error Log] :-> ${err.stack}`);
	} else {
		// simply log error
		console.error(`[Error] :-> ${err}`);
	}
	next(err); // pass error to next middleware
};
