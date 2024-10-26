import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message }) => {
  return (
    <div className={`flex gap-4 ${isBot ? 'bg-blue-50' : ''} p-4 rounded-lg`}>
      <div className="flex-shrink-0">
        {isBot ? (
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium mb-1">{isBot ? 'Health Assistant' : 'You'}</p>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </div>
  );
};