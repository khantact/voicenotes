"use client";
import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import "regenerator-runtime/runtime";
import { useState } from "react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import NoteSummarize from "./NoteSummarize";

export default function NoteTranscription() {
	const [recordingState, setRecordingState] = useState(false);

	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	const handleClick = () => {
		if (recordingState) {
			setRecordingState(false);
			SpeechRecognition.stopListening();
		} else {
			setRecordingState(true);
			SpeechRecognition.startListening({ continuous: true });
		}
	};

	return (
		<div className="bg-black columns-2">
			<div className="">
				<div className="textScreen">
					{transcript}
					<button onClick={handleClick}>
						<MdKeyboardVoice
							className={
								recordingState
									? "size-12 border-2 rounded-full absolute text-red-600 border-red-600 bottom-4 left-4 hover:text-red-600 hover:border-red-600 transition ease-in duration-100 cursor-pointer shadow-md"
									: "size-12 border-2 rounded-full absolute bottom-4 left-4 hover:text-gray-800 hover:border-gray-800 transition ease-in duration-100 cursor-pointer shadow-md"
							}
						/>
					</button>
					<button
						onClick={resetTranscript}
						className="absolute bottom-4 p-3 left-20 w-fit rounded-md bg-gray-500 hover:bg-gray-600 transition ease-in duration-100 shadow-lg"
					>
						Reset
					</button>
				</div>
			</div>
			<NoteSummarize transcript={transcript} />
		</div>
	);
}
