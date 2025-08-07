"use client";

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ChatWidget.css';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // We now manage the state ourselves, abandoning the broken `useChat` hook.
  const [messages, setMessages] = useState([{ id: 'initial', role: 'assistant', content: 'Hello! How can I assist you today?' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const messagesContainerRef = useRef(null);

  // Effect to scroll to the bottom when new messages are added
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // This is our new, manual form submission handler.
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setError(null);
    setIsLoading(true);

    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      // Use the standard `fetch` API to call our backend.
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'An error occurred while fetching the response.');
      }

      // Add a placeholder for the assistant's streaming response
      const assistantMessageId = Date.now().toString() + '-ai';
      setMessages(prev => [...prev, { id: assistantMessageId, role: 'assistant', content: '' }]);

      // Read the response stream manually
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        
        // Update the assistant's message content with the new chunk
        setMessages(prev => prev.map(msg => 
          msg.id === assistantMessageId 
            ? { ...msg, content: msg.content + chunk } 
            : msg
        ));
      }
    } catch (err) {
      setError(err);
      setMessages(prev => [...prev, { id: 'error', role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="chat-icon" onClick={() => setIsOpen(!isOpen)}>💬</div>
      {isOpen && (
        <div id="chat-window">
          <div id="chat-header">
            <span>Chat with us!</span>
            <button id="close-chat-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div id="chat-messages" ref={messagesContainerRef}>
            {messages.map((m) => (
              <div key={m.id} className={`message ${m.role}-message`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter style={coldarkDark} language={match[1]} PreTag="div" {...props}>
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              </div>
            ))}
          </div>
          <form id="chat-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              autoComplete="off"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
    </>
  );
}