"use client";
import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { useState } from "react";
export default function NoteTranscription() {
  const [recordingState, setRecordingState] = useState(false);

  const handleClick = () => {
    alert("voice is now recording");
    if (recordingState) {
      setRecordingState(false);
    } else {
      setRecordingState(true);
    }
  };

  return (
    <div className="bg-black">
      <div className="columns-2">
        <div className="textScreen">
          transcribe part
          <button onClick={handleClick}>
            <MdKeyboardVoice
              className={
                recordingState
                  ? "size-12 border-2 rounded-full absolute bottom-4 left-4 hover:text-red-600 hover:border-red-600 transition ease-in duration-100 cursor-pointer"
                  : "size-12 border-2 rounded-full absolute text-red-600 border-red-600 bottom-4 left-4 hover:text-gray-800 hover:border-gray-800 transition ease-in duration-100 cursor-pointer"
              }
            />
          </button>
        </div>
        <div className="textScreen">summarize part</div>
      </div>
    </div>
  );
}
