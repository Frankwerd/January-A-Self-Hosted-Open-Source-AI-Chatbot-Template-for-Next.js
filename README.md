# Modular AI Chatbot Template

A simple, self-hosted, open-source chatbot template that you can drop into your own project. You bring the API key and have full control over the code. This template is built for React-based frameworks like Next.js and features conversation history and response streaming.

## Features

-   **Self-Hosted:** You control the code. No third-party servers.
-   **Bring Your Own API Key:** Uses your own Google Gemini or OpenAI API key via environment variables.
-   **Model Agnostic:** Easily switch AI providers and models.
-   **Conversation History:** The AI remembers the context of the conversation.
-   **Response Streaming:** The AI's response appears word-by-word for a better user experience.
-   **Easy to Install:** Drop a React component and an API route into your existing Next.js project.

---

## How to Use

These instructions assume you have a **Next.js project**.

### 1. Copy the Files

1.  Copy the `ChatWidget.jsx` and `ChatWidget.css` files into your project's `/src/components` directory.
2.  Copy the entire `/src/app/api` directory into your project's `/src/app` directory.

### 2. Install Dependencies

Your project needs the following libraries to power the chatbot. Run this command in your terminal:

```bash
npm install next react react-dom @ai-sdk/react @ai-sdk/google @ai-sdk/openai ai react-markdown remark-gfm react-syntax-highlighter
```

### 3. Configure Your Environment

In the root of your project, create a file named .env.local for local development. For deployment on services like Vercel, you will add these as Environment Variables in your project's settings dashboard.

```
# --- CHATBOT CONFIGURATION ---

# Choose your provider: "google" or "openai"
AI_PROVIDER="google"

# Set the API key for your chosen provider.
# The AI SDK automatically looks for these specific variable names.
# For Google:
GOOGLE_GENERATIVE_AI_API_KEY="YOUR_GOOGLE_API_KEY_HERE"
# For OpenAI:
# OPENAI_API_KEY="YOUR_OPENAI_API_KEY_HERE"

# Choose the model name you want to use
AI_MODEL_NAME="gemini-2.5-flash-lite"

# (Optional) Adjust the AI's creativity. 0.0 is factual, 1.0 is very creative.
# AI_TEMPERATURE="0.7"

# Write the system prompt (the personality) for your chatbot
AI_SYSTEM_PROMPT="You are a helpful assistant for my website. Be friendly and polite."
```

### 4. Add the Component to Your Page

To make the chat widget appear on all pages, import and render the component in your root layout file.

File: src/app/layout.js (or .jsx)

```jsx
import { ChatWidget } from '../components/ChatWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
```
