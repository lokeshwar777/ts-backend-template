const DATABASE_URI = process.env.DATABASE_URI;
if (!DATABASE_URI) {
	throw new Error("777, check db uri string");
}

const DATABASE_NAME = process.env.DATABASE_NAME;

export { DATABASE_URI, DATABASE_NAME };
