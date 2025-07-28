import { Request } from "express";
import type { IUser } from "../user.interface.ts";
declare global {
	namespace Express {
		interface Request {
			user?: IUser; // ensure req.user is always avaiable/undefined
		}
	}
}
