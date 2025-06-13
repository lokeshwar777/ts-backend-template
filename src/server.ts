import app from "./app.js";

const PORT = Number(process.env.PORT);

if (isNaN(PORT)) {
	throw new Error("check for PORT (it's not a number)");
}

app.listen(PORT, () => {
	console.log(`express app listening on port ${PORT} !!!`);
});
