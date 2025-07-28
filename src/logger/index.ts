import { pino } from "pino";
import { loggerTransport } from "./transport.js";
import { loggerConfig } from "./config.js";

// pino(options, transport)
const logger = pino(loggerConfig, loggerTransport);

// DRY solution for passing values multiple times
// const childLogger = logger.child({ user: "loki" });

export { logger };
