// pages/api/summarize.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text } = req.body;
        const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
        const API_KEY = "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";
        
        try {
            const payload = { inputs: text };
            console.log('Sending payload to Hugging Face:', payload);

            const hfResponse = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!hfResponse.ok) {
                throw new Error(`Failed to fetch from Hugging Face API: ${hfResponse.statusText}`);
            }

            const result = await hfResponse.json();
            console.log('Received response from Hugging Face:', result);

            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error processing your request' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
