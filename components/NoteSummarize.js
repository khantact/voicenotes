<<<<<<< HEAD
"use client";
import React, { useEffect } from "react";
=======
import { useState } from 'react';
>>>>>>> b9e18994595dcbb425d1ecf30bac1997be2d2434

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",  // make sure the model ID is correct
        {
            headers: { Authorization: `Bearer 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` },  // use your actual API token
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

function NoteSummarize() {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');

    const getSummary = async () => {
        const data = { inputs: text };
        const result = await query(data);

        // The actual property name in the result depends on the API's response structure.
        // For many Hugging Face models, the result could be in the 'generated_text' field.
        // Check the response structure and use the correct property.
        setSummary(result.generated_text || 'No summary available');
    };

    return (
        <div>
            <textarea
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
            </div>
        </div>
    );
}

export default NoteSummarize;
