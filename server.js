// server.js
const express = require('express');
const { OpenAIApi } = require('openai');
const { Configuration } = require('openai');
const dotenv = require('dotenv');
console.log(process.env.OPENAI_API_KEY);  // This should print your API key (or undefined if it's not loaded)

dotenv.config({ path: 'api_key.env' });
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(express.json());
//if (!process.env.OPENAI_API_KEY) {
//   console.error('API key not set in environment variables.');
//    process.exit(1); // Exit the application if the key is missing
//}
//else{
    
    const configuration = new Configuration({
    
    apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key
});
//}
const openai = new OpenAIApi(configuration);

app.post('/generate-image', async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: req.body.prompt,
            n: 1,
            size: '1024x1024', // Adjust size as needed
        });
        res.json({ imageUrl: response.data.data[0].url });
    } catch (error) {
        res.status(500).send('Error generating image');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
