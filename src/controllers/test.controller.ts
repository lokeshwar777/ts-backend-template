import type { Request, RequestHandler, Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { resolve } from "path";
import APIError from "../utils/APIError.js";
import APIResponse from "../utils/APIResponse.js";

const echoHandler: RequestHandler = (req: Request, res: Response) => {
	// simple response
	res.status(200).json({ success: "This is an echo message" });
};

const testAsyncHanlder = asyncHandler(async (req: Request, res: Response) => {
	const start = performance.now();
	// new Promise((resolve) => setTimeout(resolve, 4000));

	const error = new APIError("Timer error (testing)", 777, "ERROR_TEST", {
		delay: 4000,
		trigger: "setTimeout",
		expected: "Successful timeout handling",
		actual: "Error thrown after delay",
		timestamp: new Date().toISOString(),
	});

	const response = new APIResponse(
		"Timer success (testing)", // message
		true, // success
		200, // status code
		{ status: "Success after delay" }, // data
		{
			delay: 4000,
			trigger: "setTimeout",
			expected: "Successful timeout handling",
			actual: "Success response after delay",
			timestamp: new Date().toISOString(),
		}, // meta
	);

	const resolvedResponse: APIResponse = await new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("timer execution completed");
			resolve(response);
			reject(error);
		}, 4000),
	);

	res.status(200).json(resolvedResponse.toJSON());

	// manual response
	// res.status(200).json({
	//     message: `Response sent after timer execution : ${performance.now() - start} ms`,
	// })
});

export { echoHandler, testAsyncHanlder };
