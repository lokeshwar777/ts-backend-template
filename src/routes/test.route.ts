import { Router } from "express";
import path from "path";
import { __dirname } from "../constants/index.js";
import {
	echoHandler,
	testAsyncHanlder,
} from "../controllers/test.controller.js";

const router = Router();

router.get("/", (req, res) => {
	res.send("This is test page");
});

router.get("/echo", echoHandler);

router.get("/async-handler", testAsyncHanlder);

router
	.route("/json")
	.get((_, res) => {
		const someJsonData = {
			name: "Loki",
		};
		res.json(someJsonData);
	})
	.post((req, res) => {
		console.log("form req.body", req.body, req.headers["content-type"]);
		res.send(`Received JSON: ${JSON.stringify(req.body)}`);
	});

router.post("/form-plain", (req, res) => {
	console.log("form req.body", req.body, req.headers["content-type"]);
	const name = req?.body?.name;
	if (name) {
		console.log("name", name);
	}
	res.send(`Received form: ${JSON.stringify(req.body)}`);
});

router.post("/form-nested", (req, res) => {
	console.log("nested form req.body", req.body, req.headers["content-type"]);
	const user = req?.body?.user;
	if (user) {
		console.log("user", user);
	}
	res.send(`Received form: ${JSON.stringify(req.body)}`);
});

// AI generated starts here

// 🔹 HTML string (res.send)
router.get("/send-html", (req, res) => {
	res.send(`<h2>Hello from <code>res.send()</code>!</h2>`);
});

// 🔹 Plain text
router.get("/send-text", (req, res) => {
	res.send("This is plain text from res.send()");
});

// 🔹 JSON
router.get("/send-json", (req, res) => {
	res.send({ status: "success", message: "JSON via res.send()" });
});

// 🔹 Serve specific HTML file
router.get("/file-html", (req, res) => {
	// const filePath = path.join(process.cwd(), "public/index.html");
	const filePath = path.join(__dirname, "public/index.html");
	res.sendFile(filePath);
});

// 🔹 Serve PDF resume
router.get("/file-resume", (req, res) => {
	// const filePath = path.join(process.cwd(), "public/media/resume.pdf");
	const filePath = path.join(__dirname, "public/media/resume.pdf");
	res.sendFile(filePath);
});

// 🔹 Force download
router.get("/download-resume", (req, res) => {
	// const filePath = path.join(process.cwd(), "public/media/resume.pdf");
	const filePath = path.join(__dirname, "public/media/resume.pdf");
	res.download(filePath, "Loki-Resume.pdf");
});

// 🔹 Static test (uses express.static)
router.get("/static-test", (req, res) => {
	res.send(`
    <h2>Static Test</h2>
    <img src="/images/logo.png" width="150" />
    <img src="/images/photo.jpg" width="150" />
    <script src="/js/app.js"></script>
    <link rel="stylesheet" href="/css/style.css" />
  `);
});

export default router;
