// src/app.ts
import express from "express";
import AppRouter from "./routes/index.js";

const app = express();

// Parse incoming JSON payloads
app.use(express.json());

//  Parse URL - encoded data(form submissions)
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

//  Serve static assets
app.use(express.static("public"));

app.use("/api/v1", AppRouter);

export default app;
