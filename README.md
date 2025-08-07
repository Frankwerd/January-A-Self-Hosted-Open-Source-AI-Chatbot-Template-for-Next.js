# January: A Self-Hosted AI Chatbot Template for Next.js

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/your_username/your_repo/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/your_username/your_repo.svg)](https://github.com/your_username/your_repo/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/your_username/your_repo.svg)](https://github.com/your_username/your_repo)
[![Twitter Follow](https://img.shields.io/twitter/follow/your_twitter_handle?style=social)](https://twitter.com/intent/follow?screen_name=your_twitter_handle)

January is an open-source, self-hosted AI chatbot template designed for easy integration into any Next.js/React application. It gives you full control over your data and UI, using your own API keys for services like Google Gemini or OpenAI.

![A demonstration of the January chatbot in action.](https://place-hold.it/700x400.gif)
*A demonstration of the January chatbot in action.*

## Core Features

-   **Self-Hosted & Private:** The entire application runs within your own project, ensuring no chat data is sent to third-party services.
-   **Bring Your Own API Key (BYOK):** Integrates directly with official provider SDKs. You only pay for your own token usage with no extra subscription fees.
-   **Framework-Native:** Built with the Vercel AI SDK for seamless integration with Next.js and React.
-   **Streaming Responses:** Responses are streamed word-by-word for an enhanced user experience.
-   **Conversation History:** The AI retains the context of the current conversation.
-   **Easy to Customize:** Since the code is provided, you have full control to modify the UI (`ChatWidget.css`) and backend logic (`/api/chat/route.js`).

## Technology Stack

-   Next.js (App Router)
-   React
-   Vercel AI SDK
-   Google Gemini or OpenAI
-   Tailwind CSS (for styling the template's landing page)

## Quickstart Guide

These instructions are for adding January to an existing Next.js project.

### Prerequisites

-   Node.js (v18+)
-   An existing Next.js project
-   An API key from either [Google AI Studio](https://aistudio.google.com/) or [OpenAI](https://platform.openai.com/)

### Step 1: Copy Project Files

1.  Copy the `ChatWidget.jsx` and `ChatWidget.css` files into your project's `/src/components` directory.
2.  Copy the entire `/api` directory into your project's `/src/app` directory.

### Step 2: Install Dependencies

```bash
npm install ai @ai-sdk/google @ai-sdk/openai react-markdown remark-gfm react-syntax-highlighter
```

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project's root and add the following:

```env
# --- CHATBOT CONFIGURATION ---

# Choose your provider: "google" or "openai"
AI_PROVIDER="google"

# Set the API key for your chosen provider.
# The AI SDK automatically looks for these specific variable names.
GOOGLE_GENERATIVE_AI_API_KEY="YOUR_GOOGLE_API_KEY_HERE"
OPENAI_API_KEY="YOUR_OPENAI_API_KEY_HERE" # (Only needed if AI_PROVIDER is "openai")

# Choose the model name you want to use
# Example for Google: "gemini-1.5-flash-latest"
# Example for OpenAI: "gpt-4-turbo"
AI_MODEL_NAME="gemini-1.5-flash-latest"

# (Optional) Adjust the AI's creativity. 0.0 is factual, 1.0 is very creative.
AI_TEMPERATURE="0.7"

# Write the system prompt (the personality) for your chatbot
AI_SYSTEM_PROMPT="You are a helpful and friendly assistant."
```

### Step 4: Add the Chat Widget to Your Site

To make the chat widget appear on all pages, import it into your root `layout.jsx` file.

```jsx
import '../styles/globals.css'; // Your global stylesheet
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

## Customization

-   **Styling:** Modify `/src/components/ChatWidget.css` to change the colors, dimensions, and appearance of the chat widget.
-   **Initial Prompt:** Edit the `useState` hook inside `/src/components/ChatWidget.jsx` to change the initial greeting message.
-   **Backend Logic:** Advanced developers can modify `/src/app/api/chat/route.js` to add more complex logic, tools, or data sources for the AI.

## License

This project is licensed under the MIT License.
