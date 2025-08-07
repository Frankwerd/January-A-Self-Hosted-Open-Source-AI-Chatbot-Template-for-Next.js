"use client";
import React from 'react';

export default function JanuaryPage() {
  const copyToClipboard = (elementId, button) => {
    const codeEl = document.getElementById(elementId);
    if (!codeEl) return;

    navigator.clipboard.writeText(codeEl.innerText).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = 'Copied!';
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>January - Self-Hosted AI Chatbot</title>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
              --background-color: #111827;
              --secondary-bg-color: #1F2937;
              --primary-text-color: #E5E7EB;
              --accent-color: #38BDF8;
              --secondary-text-color: #9CA3AF;
          }
          body {
              background-color: var(--background-color);
              color: var(--primary-text-color);
              font-family: 'Inter', sans-serif;
          }
          h1, h2, h3 {
              font-family: 'Poppins', sans-serif;
          }
          .code-snippet {
              font-family: 'Fira Code', monospace;
              background-color: var(--secondary-bg-color);
              padding: 1rem;
              border-radius: 0.5rem;
              color: var(--primary-text-color);
              overflow-x: auto;
          }
        ` }} />
      </head>
      <div className="min-h-screen flex flex-col antialiased">
        <header className="sticky top-0 z-50 bg-opacity-70 backdrop-blur-lg border-b border-gray-700/50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a className="text-2xl font-bold text-[var(--primary-text-color)]" href="#">January</a>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-[var(--primary-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300" href="#features">Features</a>
              <a className="text-[var(--primary-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300" href="#installation">Installation</a>
            </div>
            <a className="bg-[var(--accent-color)] text-[var(--background-color)] font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-colors duration-300" href="#">View on GitHub</a>
          </nav>
        </header>
        <main className="flex-grow">
          <section className="relative text-center py-20 md:py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-color)] to-indigo-900/20 opacity-30"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            <div className="relative z-10 container mx-auto">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">The AI Chatbot You Can Host Yourself</h1>
              <p className="text-lg md:text-xl text-[var(--secondary-text-color)] max-w-3xl mx-auto mb-8">January is a free, open-source chatbot template for your website. Simple to install, fully customizable, and completely under your control.</p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <a className="bg-[var(--accent-color)] text-[var(--background-color)] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105" href="#">Get the Code on GitHub</a>
              </div>
            </div>
          </section>
          <section className="py-20 px-6" id="features">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything You Need, Nothing You Don&apos;t</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[var(--secondary-bg-color)] p-8 rounded-lg border border-gray-700/50">
                  <div className="text-[var(--accent-color)] mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Self-Hosted &amp; Private</h3>
                  <p className="text-[var(--secondary-text-color)]">Keep your data private. January runs on your own server, so conversations stay between you and your users.</p>
                </div>
                <div className="bg-[var(--secondary-bg-color)] p-8 rounded-lg border border-gray-700/50">
                  <div className="text-[var(--accent-color)] mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258a1 1 0 01-.97-1.243l1.258-7.5a1 1 0 01.97-1.243h7.404a1 1 0 01.97 1.243l-1.258 7.5-1.258 7.5a1 1 0 01-.97 1.243H1v-2h2v-2h2v-2h2v-2h2v-2h2V9a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bring Your Own API Key</h3>
                  <p className="text-[var(--secondary-text-color)]">No subscriptions. Connect directly to Google Gemini or OpenAI with your own API key. You only pay for what you use.</p>
                </div>
                <div className="bg-[var(--secondary-bg-color)] p-8 rounded-lg border border-gray-700/50">
                  <div className="text-[var(--accent-color)] mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Simple &amp; Fast Installation</h3>
                  <p className="text-[var(--secondary-text-color)]">Get up and running in minutes. Just copy the component, install the dependencies, and add your API key.</p>
                </div>
                <div className="bg-[var(--secondary-bg-color)] p-8 rounded-lg border border-gray-700/50">
                  <div className="text-[var(--accent-color)] mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fully Open-Source</h3>
                  <p className="text-[var(--secondary-text-color)]">Built for developers. January is completely open-source. Fork it, customize it, and make it your own.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 px-6 bg-[var(--secondary-bg-color)]" id="installation">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Started in 3 Simple Steps</h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4 rounded-full bg-[var(--background-color)] text-[var(--accent-color)] text-2xl font-bold border-2 border-[var(--accent-color)]">1</div>
                  <h3 className="text-xl font-bold mb-2">Copy the Files</h3>
                  <div className="code-snippet text-left text-sm relative">
                    <button onClick={(e) => copyToClipboard('code-step-1', e.currentTarget)} className="absolute top-2 right-2 bg-gray-700/50 hover:bg-gray-600/50 text-xs font-semibold text-gray-300 py-1 px-2 rounded-md transition-colors">Copy</button>
                    <pre><code id="code-step-1">cp -r january/components /your-project/src</code></pre>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4 rounded-full bg-[var(--background-color)] text-[var(--accent-color)] text-2xl font-bold border-2 border-[var(--accent-color)]">2</div>
                  <h3 className="text-xl font-bold mb-2">Install Dependencies</h3>
                  <div className="code-snippet text-left text-sm relative">
                    <button onClick={(e) => copyToClipboard('code-step-2', e.currentTarget)} className="absolute top-2 right-2 bg-gray-700/50 hover:bg-gray-600/50 text-xs font-semibold text-gray-300 py-1 px-2 rounded-md transition-colors">Copy</button>
                    <pre><code id="code-step-2">npm install @ai-sdk/react @google/generative-ai</code></pre>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4 rounded-full bg-[var(--background-color)] text-[var(--accent-color)] text-2xl font-bold border-2 border-[var(--accent-color)]">3</div>
                  <h3 className="text-xl font-bold mb-2">Add Your Key</h3>
                  <div className="code-snippet text-left text-sm relative">
                    <button onClick={(e) => copyToClipboard('code-step-3', e.currentTarget)} className="absolute top-2 right-2 bg-gray-700/50 hover:bg-gray-600/50 text-xs font-semibold text-gray-300 py-1 px-2 rounded-md transition-colors">Copy</button>
                    <pre><code id="code-step-3">GOOGLE_GENERATIVE_AI_API_KEY=&quot;YOUR_KEY_HERE&quot;</code></pre>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <a className="bg-[var(--accent-color)] text-[var(--background-color)] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105" href="#">View Full Documentation</a>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-[var(--secondary-bg-color)] text-gray-400 py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="mb-4 md:mb-0">January - An Open-Source Project</p>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a className="hover:text-[var(--accent-color)] transition-colors" href="#">GitHub Repository</a>
              <a className="hover:text-[var(--accent-color)] transition-colors" href="#">Report an Issue</a>
              <a className="hover:text-[var(--accent-color)] transition-colors" href="#">MIT License</a>
            </div>
            <p>© 2024</p>
          </div>
        </footer>
      </div>
    </>
  );
}
