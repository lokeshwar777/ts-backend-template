import type { LoggerOptions } from "pino";

const loggerConfig: LoggerOptions = {
	// customLevels: {loki: 777}, // logger.loki()
	level:
		process.env.PINO_LOG_LEVEL ||
		(process.env.NODE_ENV === "production" ? "info" : "debug"),

	formatters: {
		level: (label) => ({ level: label.toUpperCase() }),
	},

	// use for abstraction
	/*
	redact: {
		paths: ["req.headers.authorization", "user.email", "body.password"],
		remove: true, // doesn't display
	},
    */

	timestamp: () => `,"time":"${new Date().toISOString()}"`,
};

export { loggerConfig };
