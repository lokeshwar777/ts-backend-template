import path from "path";
import type { DestinationStream, TransportTargetOptions } from "pino";
import { pino } from "pino";

const isProd = process.env.NODE_ENV === "production";
const __dirname = import.meta.dirname;
const absoluteLogFilePath = path.normalize(
	path.join(__dirname, "..", "logs", "output.log"),
);

const devTransports: TransportTargetOptions[] = [
	// output logs to console
	{
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},

	// output logs to log file (`output.log`)
	{
		target: "pino/file",
		options: {
			destination: absoluteLogFilePath,
			mkdir: true,
		},
	},
];

const prodTransports: TransportTargetOptions[] = [
	// logs to file
	{
		target: "pino/file",
		options: {
			destination: absoluteLogFilePath,
			mkdir: true,
		},
	},

	// logs to stdout
	{
		target: "pino/file",
	},
];

const loggerTransport: DestinationStream = pino.transport({
	targets: isProd ? prodTransports : devTransports,
});

export { loggerTransport };

// destination : (default) 1-STDOUT, 2-STDERR
// REF : https://getpino.io/#/docs/transports?id=pinofile
// ADDITIONAL CONSIDERATIONS
// append: false, // if you do not want to append
// tokens in case of cloud loggers
