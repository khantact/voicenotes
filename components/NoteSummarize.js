import React, { useEffect } from "react";

export default function NoteSummarize({ transcript }) {
	useEffect(async () => {
		const response = await fetch("/api/route");
	});

	return <div className="textScreen"></div>;
}
