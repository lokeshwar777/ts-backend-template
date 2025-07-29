import path from "path";

const __dirname = path.join(import.meta.dirname, "..");

const PORT = Number(process.env.PORT);

if (isNaN(PORT)) {
	throw new Error("check for PORT (it's not a number)");
}

// dev - debug/trace, prod - info/warn
const LOG_LEVEL =
	process.env.PINO_LOG_LEVEL ||
	(process.env.NODE_ENV === "production" ? "info" : "debug");

export { __dirname, PORT, LOG_LEVEL };
export { ERRORS } from "./error.constants.js";
export { RESPONSES } from "./response.constants.js";
export { DATABASE_URI, DATABASE_NAME } from "./db.constants.js";
