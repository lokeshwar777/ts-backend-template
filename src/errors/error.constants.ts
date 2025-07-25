import APIError from "./APIError.js";

export const ERRORS = {
	UNAUTHORIZED: new APIError("Unauthorized", 401, "UNAUTHORIZED"),
	INVALID_TOKEN: new APIError("Invalid Token", 403, "INVALID_TOKEN"),
	USER_NOT_FOUND: new APIError("User Not Found", 404, "USER_NOT_FOUND"),
	// TODO : add more
};
