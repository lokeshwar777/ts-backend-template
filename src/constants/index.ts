import path from "path";

const __dirname = path.join(import.meta.dirname, "..");

const PORT = Number(process.env.PORT);

if (isNaN(PORT)) {
	throw new Error("check for PORT (it's not a number)");
}

export { __dirname, PORT };
