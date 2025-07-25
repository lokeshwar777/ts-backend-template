import APIError from "../utils/APIError.js";

export const ERRORS = {
	UNAUTHORIZED: new APIError("Unauthorized", 401, "UNAUTHORIZED"),
	INVALID_TOKEN: new APIError("Invalid Token", 403, "INVALID_TOKEN"),
	USER_NOT_FOUND: new APIError("User Not Found", 404, "USER_NOT_FOUND"),

	ZOD_VALIDATION_ERROR: (fieldErrors: Object) =>
		new APIError(
			"Zod Validation Error",
			400,
			"ZOD_VALIDATION_ERROR",
			fieldErrors,
		),

	// TODO : add more
};
