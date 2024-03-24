"use client";
import React, { useEffect, useState } from "react";

function NoteSummarize({ transcript }) {
	const [text, setText] = useState("");
	const [summary, setSummary] = useState("");
	const [transcriptionText, setTranscriptionText] = useState({
		transcript,
	});
	useEffect(() => {
		setTranscriptionText({ transcript });
		const fetchData = async () => {
			try {
				const response = await fetch("api/summarize", {
					method: "POST",
					body: { transcript },
				});

				if (!response.ok) {
					console.log("response error:", response.statusText);
				}
				const responseJson = response.json();
				console.log("response: ", responseJson);
				setSummary(responseJson);
			} catch (error) {
				console.log("errorMESSAGE:", error.message);
			}
		};
		fetchData();
		console.log("pulling from hf");
	}, [transcript]);
	return (
		<div className="textScreen">
			{summary}
			{/* <textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter text to summarize"
			/>
			<button onClick={getSummary}>Summarize</button>
			<div>
				<p>Summary:</p>
				<textarea
					value={summary}
					readOnly
					placeholder="Summary will appear here"
				/>
			</div> */}
		</div>
	);
}

export default NoteSummarize;
