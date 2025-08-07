// File: src/app/api/chat/route.js

import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'edge';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

// Define a helper function to format message history for the Google AI SDK
const buildGoogleGenAIPrompt = (messages) => ({
  contents: messages
    .filter(msg => msg.role === 'user' || msg.role === 'assistant')
    .map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })),
});

export async function POST(req) {
  const { messages } = await req.json();

  // Get the last user message from the incoming payload
  const lastUserMessage = messages[messages.length - 1]?.content;

  if (!lastUserMessage) {
    return new Response(JSON.stringify({ error: 'No user message found' }), { status: 400 });
  }

  // Get the system prompt and other settings from environment variables
  const systemPrompt = process.env.AI_SYSTEM_PROMPT || "You are a helpful assistant.";
  const modelName = process.env.AI_MODEL_NAME || "gemini-1.5-flash-latest"; // Updated to a more current model
  const temperature = parseFloat(process.env.AI_TEMPERATURE) || 0.7;
  
  try {
    const model = genAI.getGenerativeModel({ 
      model: modelName,
      systemInstruction: systemPrompt, // <-- THIS IS THE KEY FIX
    });
    
    // Format the message history to exclude the system prompt, which is now handled separately
    const googleAIPrompt = buildGoogleGenAIPrompt(messages);
    
    const result = await model.generateContentStream(googleAIPrompt);

    // Stream the response back to the client
    const customStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of result.stream) {
          const text = chunk.text();
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
    console.error("[Chat API Error with @google/generative-ai]", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
