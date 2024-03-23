import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import NoteTranscription from "@/components/NoteTranscription";
import NoteSummarize from "@/components/NoteSummarize";

export default function page() {
	return (
		<div className="bg-black">
			<NoteTranscription />
		</div>
	);
}
