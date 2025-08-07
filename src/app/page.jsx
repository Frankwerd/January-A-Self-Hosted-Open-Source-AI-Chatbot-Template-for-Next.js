// src/app/page.jsx
"use client"; // This is essential for interactivity to work

import React from 'react';

export default function HomePage() {

  // Function to handle copying text from code snippets to the clipboard
  const copyToClipboard = (text, button) => {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.style.backgroundColor = '#4CAF50'; // Optional: visual feedback
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = ''; // Revert style
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-[var(--primary-background)] bg-opacity-80">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a className="text-2xl font-bold text-[var(--primary-text)]" href="#">January</a>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors" href="#features">Features</a>
            <a className="text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors" href="#installation">Installation</a>
            <a className="btn-secondary" href="https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js" rel="noopener noreferrer" target="_blank">View on GitHub</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative text-center py-32 md:py-48 px-6 overflow-hidden" id="hero">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background)] to-transparent z-0"></div>
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--secondary-background)] rounded-full opacity-20 filter blur-3xl"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent-color)] rounded-full opacity-10 filter blur-3xl"></div>
          <div className="relative z-10 container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary-text)] mb-4">The AI Chatbot You Can Host Yourself</h1>
            <p className="text-lg md:text-xl text-[var(--secondary-text)] max-w-3xl mx-auto mb-8">January is a free, open-source, and self-hosted AI chatbot template designed for developers who value privacy, control, and endless customization.</p>
            <a className="btn-primary inline-block" href="https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js" rel="noopener noreferrer" target="_blank">Get the Code on GitHub</a>
          </div>
        </section>

        <section className="py-24 px-8 bg-[var(--secondary-background)]" id="features">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="feature-card">
                <svg className="h-10 w-10 text-[var(--accent-color)] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h3 className="text-xl font-bold text-[var(--primary-text)]">Self-Hosted</h3>
                <p className="text-[var(--secondary-text)]">Deploy on your own server for complete data privacy and control. No third-party reliance.</p>
              </div>
              <div className="feature-card">
                <svg className="h-10 w-10 text-[var(--accent-color)] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h1.586a1 1 0 01.707.293l.853.853a2 2 0 002.828 0l.853-.853A1 1 0 0113.414 7H15z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h3 className="text-xl font-bold text-[var(--primary-text)]">Bring Your Own Key</h3>
                <p className="text-[var(--secondary-text)]">Integrate seamlessly with your preferred AI provider like OpenAI, Anthropic, or any other.</p>
              </div>
              <div className="feature-card">
                <svg className="h-10 w-10 text-[var(--accent-color)] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h3 className="text-xl font-bold text-[var(--primary-text)]">Open-Source</h3>
                <p className="text-[var(--secondary-text)]">Transparent, community-driven, and MIT licensed. Inspect, modify, and contribute freely.</p>
              </div>
              <div className="feature-card">
                <svg className="h-10 w-10 text-[var(--accent-color)] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h3 className="text-xl font-bold text-[var(--primary-text)]">Modular</h3>
                <p className="text-[var(--secondary-text)]">Easily extend and customize with a clean, modular architecture. Build the exact chatbot you need.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6" id="installation">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)] mb-4">Quick Installation</h2>
            <p className="text-lg text-[var(--secondary-text)] max-w-2xl mx-auto mb-12">Get January up and running on your local machine in just a few steps.</p>
            <div className="max-w-2xl mx-auto text-left space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-[var(--primary-text)] mb-2">1. Clone the Repository</h4>
                <div className="code-snippet">
                  <code>git clone https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js.git</code>
                  <button className="copy-button" onClick={(e) => copyToClipboard('git clone https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js.git', e.currentTarget)}>Copy</button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--primary-text)] mb-2">2. Install Dependencies</h4>
                <div className="code-snippet">
                  <code>npm install</code>
                  <button className="copy-button" onClick={(e) => copyToClipboard('npm install', e.currentTarget)}>Copy</button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--primary-text)] mb-2">3. Start the Server</h4>
                <div className="code-snippet">
                  <code>npm start</code>
                  <button className="copy-button" onClick={(e) => copyToClipboard('npm start', e.currentTarget)}>Copy</button>
                </div>
              </div>
            </div>
            <a className="btn-primary inline-block mt-12" href="https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js#readme" target="_blank" rel="noopener noreferrer">View Full Documentation</a>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-[var(--secondary-background)] bg-opacity-30" id="customization">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)] mb-4">Effortless Customization</h2>
                <p className="text-lg text-[var(--secondary-text)] max-w-3xl mx-auto">
                    Fine-tune January's personality by editing the system prompt, and match your brand's aesthetic with simple CSS modifications. Create a truly unique chatbot experience.
                </p>
            </div>
        </section>
      </main>

      <footer className="bg-[var(--secondary-background)] py-10 px-6">
        <div className="container mx-auto text-center text-[var(--secondary-text)]">
          <p className="mb-4">Created by <a className="font-semibold text-[var(--primary-text)] hover:text-[var(--accent-color)] transition-colors" href="https://francisjbutti.vercel.app/" rel="noopener noreferrer" target="_blank">Francis John LiButti</a></p>
          <div className="flex justify-center space-x-6 mb-6">
            <a className="hover:text-[var(--primary-text)] transition-colors" href="https://github.com/Frankwerd" rel="noopener noreferrer" target="_blank">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
            </a>
            <a className="hover:text-[var(--primary-text)] transition-colors" href="https://www.linkedin.com/in/francis-libutti-398981156/" rel="noopener noreferrer" target="_blank">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
          <div className="space-x-4">
            <a className="hover:text-[var(--primary-text)] transition-colors" href="https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js" rel="noopener noreferrer" target="_blank">Project on GitHub</a>
            <span>•</span>
            <a className="hover:text-[var(--primary-text)] transition-colors" href="https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js/blob/main/LICENSE" rel="noopener noreferrer" target="_blank">MIT License</a>
          </div>
        </div>
      </footer>
    </>
  );
}