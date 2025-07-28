import type { Request, Response, NextFunction } from "express";

export const authenticate = (req: Request, _: Response, next: NextFunction) => {
	// inject user data into req.user after verification
	// req.user = {}
	next();
};
