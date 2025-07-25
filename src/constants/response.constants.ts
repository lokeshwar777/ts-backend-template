import APIResponse from "../utils/APIResponse.js";

export const RESPONSES = {
	OK: (message = "success", data = {}, meta?: unknown) =>
		new APIResponse(message, true, 200, data, meta),

	CREATED: (message = "created", data = {}, meta?: unknown) =>
		new APIResponse(message, true, 201, data, meta),
};
