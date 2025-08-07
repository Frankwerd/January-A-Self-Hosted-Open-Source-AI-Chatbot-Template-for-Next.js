# January: A Self-Hosted AI Chatbot Template for Next.js

<p align="center">
  <a href="https://self-hosted-open-source-ai-chatbot.vercel.app/" target="_blank">
    <strong>✨ View the Live Demo &rarr;</strong>
  </a>
</p>

<p align="center">
  <img alt="Project Status" src="https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge">
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Google Gemini" src="https://img.shields.io/badge/Google%20Gemini-8E77F0?style=for-the-badge&logo=google-gemini&logoColor=white">
</p>

January is a modular, self-hosted AI chatbot template designed for seamless integration into any Next.js/React application. It provides developers full control over their UI, data privacy, and choice of AI provider, using their own API keys without any subscription fees.

![A demonstration of the January chatbot in action.](https://place-hold.it/800x450.gif)
*A demonstration of the January chatbot in action.*

## Core Features

-   **Self-Hosted & Private:** The entire application runs within your own project, ensuring no chat data is sent to third-party services.
-   **Bring Your Own API Key (BYOK):** Comes pre-configured for Google's Generative AI SDK, but is easy to adapt to others. You only pay for your own token usage with no extra platform fees.
-   **Provider Flexible (Modular by Design):** The simple backend logic can be quickly swapped to support any major AI provider, such as OpenAI, Anthropic, and more.
-   **Streaming Responses:** Responses are streamed word-by-word from the API for an enhanced, real-time user experience.
-   **Conversation History:** The AI retains the context of the current conversation, allowing for natural, follow-up questions.
-   **Fully Customizable:** Since the unopinionated code is provided, you have total control to modify the UI (`ChatWidget.css`) and backend logic (`/api/chat/route.js`).

## Technology Stack

-   **Next.js** (App Router)
-   **React** (with Hooks)
-   **@google/generative-ai** (Official Google AI SDK, pre-configured)
-   **Adaptable for other SDKs** (e.g., `openai`)
-   **react-markdown** (For rendering rich AI responses)

## Quickstart Guide (Default: Google Gemini)

These instructions cover adding January to an existing Next.js project with the default Google Gemini setup. See the "Customization" section to use a different provider.

### Prerequisites

-   Node.js (v18+)
-   An existing Next.js project
-   An API key from [Google AI Studio](https://aistudio.google.com/)

### Step 1: Copy Project Files

1.  Copy `ChatWidget.jsx` and `ChatWidget.css` into your project's `/src/components` directory.
2.  Copy the entire `/api` directory into your project's `/src/app` directory.


Your final file structure should look like this:

```
/src
├── /app
│   ├── /api
│   │   └── /chat
│   │       └── route.js  <-- The backend logic
│   ├── layout.jsx
│   └── page.jsx
├── /components
│   ├── ChatWidget.jsx    <-- The frontend UI
│   └── ChatWidget.css    <-- The widget's styles
```

### Step 2: Install Dependencies

Run the following command in your terminal to install the necessary packages.

```bash
npm install @google/generative-ai react-markdown remark-gfm react-syntax-highlighter
```

### Step 3: Add the Chat Widget to Your Site

To make the chat widget appear on all pages, import it into your root `layout.jsx` file.

```jsx
// src/app/layout.jsx
import './globals.css'; // Your global stylesheet
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

### Step 4: Configure Local Environment

Create a file named `.env.local` in the root of your project. This file is for your local development and should **not** be committed to Git. Add your Google API key here.

```env
# --- CHATBOT CONFIGURATION ---
# The API route at /src/app/api/chat/route.js is hardcoded to use this variable name.
GOOGLE_GENERATIVE_AI_API_KEY="YOUR_GOOGLE_API_KEY_HERE"

# (Optional) The following variables are read by the API route to customize the chatbot's behavior.
# See the "Customization" section below for more details.
AI_SYSTEM_PROMPT="You are a helpful and friendly assistant."
AI_MODEL_NAME="gemini-1.5-flash-latest"
AI_TEMPERATURE="0.7"```

Start your development server (`npm run dev`) and the chatbot should now be active on your site!
```

## Deployment with Vercel

To deploy your project, you must securely add your environment variables to Vercel.

1.  Go to your project's dashboard on Vercel.
2.  Navigate to the **Settings** tab.
3.  Click on **Environment Variables** in the side menu.
4.  Add each variable from your `.env.local` file (e.g., `GOOGLE_GENERATIVE_AI_API_KEY`, `AI_SYSTEM_PROMPT`). Ensure the variable keys are an exact match.
5.  **For the multi-line `AI_SYSTEM_PROMPT`**, simply copy the entire prompt text and paste it directly into the "Value" field. Vercel will handle the newlines correctly.
6.  After adding all variables, go to the **Deployments** tab and redeploy your project to apply the changes.

## Deployment & Integration Strategies

Once configured, you need to get the chatbot onto a live website.

### Strategy 1: Native Integration (For Next.js Sites)

This is the simplest method and is the primary use case for this template.

1.  Follow the "How to Use" steps to integrate the chatbot into the client's existing Next.js project.
2.  Deploy the Next.js application to a hosting provider like Vercel or Netlify.
3.  In the hosting provider's project dashboard, set the environment variables from your `.env.local` file (e.g., `GOOGLE_API_KEY`, `AI_SYSTEM_PROMPT`). This is the secure, production-safe way to manage your secrets.

### Strategy 2: Iframe Embedding (For Non-React Sites)

If the client's website is built with WordPress, Shopify, Squarespace, or plain HTML, you can host the chatbot separately and embed it using an `<iframe>`.

**Step 1: Create a Dedicated Chatbot Host Project**

Create a new, minimal Next.js project. The only purpose of this project is to host your chatbot. Follow the "How to Use" instructions to install the template into this new project.

**Step 2: Deploy the Host Project**

Deploy this new Next.js project to Vercel or Netlify. In the Vercel/Netlify project settings, add the environment variables (`GOOGLE_API_KEY`, etc.) to configure the chatbot. You will get a public URL for your deployed chatbot (e.g., `https://my-client-chatbot.vercel.app`).

**Step 3: Add the Embed Snippet to the Client's Site**

Provide the client with the following HTML/JavaScript snippet. They should paste this code into their website's main template, right before the closing `</body>` tag.

```html
<!-- START: AI Chatbot Embed Snippet -->
<style>
  #ai-chat-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #007bff; /* <-- Change this to your client's brand color */
    border-radius: 50%;
    cursor: pointer;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  #ai-chat-iframe-container {
    display: none;
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 370px;
    height: 550px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    z-index: 9999;
    overflow: hidden;
  }
  #ai-chat-iframe-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<div id="ai-chat-icon">💬</div>
<div id="ai-chat-iframe-container">
  <!-- 👇 Change this URL to your deployed chatbot's URL! 👇 -->
  <iframe src="https://my-client-chatbot.vercel.app"></iframe>
</div>

<script>
  const chatIcon = document.getElementById('ai-chat-icon');
  const chatIframeContainer = document.getElementById('ai-chat-iframe-container');
  chatIcon.addEventListener('click', () => {
    const isVisible = chatIframeContainer.style.display === 'block';
    chatIframeContainer.style.display = isVisible ? 'none' : 'block';
  });
</script>
<!-- END: AI Chatbot Embed Snippet -->
```

## Customization

You have full control to change the chatbot's personality, behavior, and appearance.

### The System Prompt (`AI_SYSTEM_PROMPT`)

This is the most important setting for defining the chatbot's persona. It gives the AI its core instructions and boundaries.

**Tips for writing a good system prompt:**
*   **Define a Role:** "You are a friendly customer support agent for Spacely Sprockets."
*   **Provide a Knowledge Base:** "Use the following information to answer questions..."
*   **Set Boundaries:** "Do not answer questions that are not related to our products. If you cannot answer, you must refer them to support@example.com."
*   **Specify the Tone:** "Always be polite, friendly, and enthusiastic."

### AI Temperature (`AI_TEMPERATURE`)

This setting (a number between 0.0 and 1.0) controls the creativity of the AI.
*   **Low Temperature (e.g., `0.2`):** More factual, predictable, and consistent. Ideal for Q&A bots.
*   **High Temperature (e.g., `1.0`):** More creative and varied. Better for brainstorming or marketing tasks.

### Initial Greeting & Styling

-   **Initial Greeting:** To change the first message the user sees, open `src/components/ChatWidget.jsx` and modify the initial state in the `useState` hook for `messages`.
-   **Styling:** To change the colors, icon, or dimensions, modify the CSS rules directly in `src/components/ChatWidget.css`.

### Using a Different AI Provider (e.g., OpenAI)

The template is easily adaptable. Here’s how you would switch to OpenAI:

**1. Install the OpenAI SDK:**
Stop your server and run:
```bash
npm install openai
```

**2. Update Environment Variables:**
In your `.env.local` file, uncomment and fill in your `OPENAI_API_KEY` and update the `AI_MODEL_NAME`:
```env
# ...
GOOGLE_GENERATIVE_AI_API_KEY="..." # (Can be left here or removed)
OPENAI_API_KEY="sk-YOUR_OPENAI_API_KEY_HERE"

AI_MODEL_NAME="gpt-4-turbo"
# ...
```

**3. Modify the API Route:**
Replace the contents of `src/app/api/chat/route.js` with logic for the new provider. Here is an example for OpenAI:

```javascript
// src/app/api/chat/route.js (Example for OpenAI)
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  const systemPrompt = process.env.AI_SYSTEM_PROMPT || "You are a helpful assistant.";
  const modelName = process.env.AI_MODEL_NAME || "gpt-4-turbo";
  const temperature = parseFloat(process.env.AI_TEMPERATURE) || 0.7;

  // Add the system prompt to the message array
  const processedMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.filter(msg => msg.role === 'user' || msg.role === 'assistant')
  ];

  try {
    const response = await openai.chat.completions.create({
      model: modelName,
      temperature: temperature,
      messages: processedMessages,
      stream: true,
    });

    // Create a new stream that sends only the raw text content
    const customStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || '';
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(customStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("[Chat API Error with OpenAI]", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

### Other Customizations
-   **Styling:** Modify `/src/components/ChatWidget.css` to change the colors, dimensions, and appearance of the chat widget.
-   **Initial Greeting:** Edit the `useState` hook for `messages` inside `/src/components/ChatWidget.jsx` to change the initial greeting message.

## License

This project is licensed under the MIT License.
