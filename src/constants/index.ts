import path from "path";

const __dirname = path.join(import.meta.dirname, "..");

const PORT = Number(process.env.PORT);

if (isNaN(PORT)) {
	throw new Error("check for PORT (it's not a number)");
}

export { __dirname, PORT };
export { ERRORS } from "./error.constants.js";
export { RESPONSES } from "./response.constants.js";
export { DATABASE_URI, DATABASE_NAME } from "./db.constants.js";
