interface SerialisedAPIError {
	name: string;
	message: string;
	statusCode: number;
	errorCode?: string;
	details?: unknown;
}

export default class APIError extends Error {
	readonly statusCode: number;
	readonly errorCode?: string;
	readonly details?: unknown;

	constructor(
		message: string,
		statusCode = 500,
		errorCode?: string,
		details?: unknown,
	) {
		super(message);
		this.name = "APIError";
		this.statusCode = statusCode;
		this.errorCode = errorCode;
		this.details = details;

		// fixes prototye chain
		Object.setPrototypeOf(this, APIError.prototype);
	}

	toJSON() {
		// approach 1 (concise but not clean)
		/*
		return {
			name: this.name,
			message: this.message,
			statusCode: this.statusCode,
			...(this.errorCode && { errorCode: this.errorCode }), // truthy check
			...(typeof this.details === "object" && this.details !== null
				? { details: this.details }
				: {}), // safer, cleaner, explicit
		};
        */

		const errorPayload: SerialisedAPIError = {
			name: this.name,
			message: this.message,
			statusCode: this.statusCode,
		};

		if (this.errorCode) {
			errorPayload.errorCode = this.errorCode;
		}
		if (this.details) {
			errorPayload.details = this.details;
		}

		return errorPayload;
	}
}

/*
const printProto = (obj: unknown): void => {
	if (typeof obj !== "object" || obj === null) return;

	const proto = Object.getPrototypeOf(obj);
	console.log(
		`prototype of ${obj.constructor?.name ?? "null"} is ${proto?.constructor?.name ?? "null"}`
	);

	printProto(proto);
};
const apiError = new APIError();
printProto(apiError);
*/

// ? - is for optional
