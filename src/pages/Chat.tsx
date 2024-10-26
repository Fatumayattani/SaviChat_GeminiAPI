import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Loader2 } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { getChatResponse } from '../lib/gemini';

interface Message {
  text: string;
  isBot: boolean;
}

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Savi, your health assistant. I can help you understand symptoms and provide general health information. How can I assist you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: 'I apologize, but I encountered an error. Please try again later.',
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-blue-600">
          <h1 className="text-2xl font-bold text-white">Chat with Savi</h1>
          <p className="text-blue-100 mt-2">
            Get reliable health information and guidance
          </p>
        </div>

        <div className="p-6">
          <DisclaimerBanner />

          <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                isBot={message.isBot}
                message={message.text}
              />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500 p-4">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms or ask a health question..."
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 disabled:text-gray-400"
            >
              <SendHorizontal className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};