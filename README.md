# AI Image Generator Website

Welcome to the **AI Image Generator Website**! This project is a simple yet powerful web application that generates random AI-generated images based on user input. By leveraging the OpenAI DALL-E API, the application can take any prompt (a word or a phrase) and return a unique AI-generated image that matches the given description.

## 🖼️ Project Demo
Enter any text prompt into the input field, click on "Generate Image," and watch the magic happen! The app will fetch a custom image that aligns with your prompt, thanks to OpenAI's cutting-edge image generation technology.

## 🚀 Features
- **Interactive and User-Friendly Interface**: A simple and clean design that allows users to easily enter prompts and generate images.
- **AI-Powered Image Generation**: Utilizes the OpenAI DALL-E API to generate unique images based on text descriptions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Displays error messages if something goes wrong with the image generation.

## 🛠️ Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: OpenAI DALL-E API
- **Environment Configuration**: dotenv for managing API keys

## 📂 Project Structure
```bash
.
├── api_key.env              # Environment file containing the OpenAI API key
├── index.html               # Main HTML file (frontend)
├── index.css                # Styling for the website
├── random.js                # Frontend JavaScript for handling form input and image rendering
├── server.js                # Backend server handling the API requests and responses
├── README.md                # Project documentation (this file)
