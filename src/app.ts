// src/app.ts
import express from "express";
import APIRouter from "./routes/index.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
// import { logErrors } from "./middlewares/logErrors.js";
import { jsonErrorResponder } from "./middlewares/jsonErrorResponder.js";
import { PORT } from "./constants/index.js";
// import methodOverride from "method-override"; // use if needed

const app = express();

// Parse incoming JSON payloads
// app.use(bodyParser.json()) // legacy
app.use(express.json()); // modern

//  Parse URL - encoded data(form submissions)
// app.use(bodyParser.urlencoded({
//   extended: true
// })) // legacy
// app.use(express.urlencoded()); // modern
app.use(express.urlencoded({ extended: true })); // nested object compatibility

// override with POST having ?_method=DELETE
// app.use(methodOverride("_method")); // use if needed

//  Serve static assets
app.use(express.static("public"));

// API Routes
app.use("/api/v1", APIRouter);

// Error Middlewares (order matters!!!)
// app.use(logErrors); // use if needed
app.use(jsonErrorResponder); // use if needed to handle client side JSON errors
app.use(globalErrorHandler); // handle HTML & non-JSON errors

const startServer = () =>
	app.listen(PORT, () => {
		console.log(`🌐 Express server running at http://localhost:${PORT}`);
	});

export default startServer;
