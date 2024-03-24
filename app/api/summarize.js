// pages/api/summarize.js
import fetch from "node-fetch";

export default async function handler(req, res) {
	data = req.body;
	const API_URL =
		"https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
	const API_KEY = {
		Authorization: "Bearer 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",
	};
	try {
		const response = await fetch(API_URL, {
			headers: API_KEY,
			method: "POST",
			body: data,
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error processing your request" });
	}
}
