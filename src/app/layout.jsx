import { ChatWidget } from '../components/ChatWidget';
import './globals.css'; // Imports the new global stylesheet

export const metadata = {
  title: 'January - Self-Hosted AI Chatbot',
  description: 'January is a free, open-source chatbot template for your website. Simple to install, fully customizable, and completely under your control.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Adds Google Fonts and Tailwind CSS for styling */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Poppins:wght@600&family=Fira+Code&family=Manrope&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Renders the page content and the chat widget */}
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
