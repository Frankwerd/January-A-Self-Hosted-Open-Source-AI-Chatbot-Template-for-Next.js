// File: src/app/api/chat/route.js

import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'edge';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

export async function POST(req) {
  const { messages } = await req.json();
  const lastUserMessage = messages[messages.length - 1]?.content;

  if (!lastUserMessage) {
    return new Response(JSON.stringify({ error: 'No user message found' }), { status: 400 });
  }
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const result = await model.generateContentStream(lastUserMessage);

    // THE FIX: Create a new stream that sends ONLY the raw text.
    // No prefixes, no JSON. This is the simplest possible format and will
    // be correctly interpreted by the `useChat` hook.
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
