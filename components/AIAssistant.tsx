import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { generatePartnershipResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Tertarik menjadi mitra bisnis Nyantuy Group? Tanyakan apa saja mengenai franchise kami!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await generatePartnershipResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Maaf, terjadi kesalahan koneksi.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-orange to-brand-yellow p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} fill="white" />
              <h3 className="font-display font-bold text-sm">Nyantuy Partner Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-brand-beige flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-orange text-white self-end rounded-br-none shadow-md shadow-orange-200'
                    : 'bg-white text-gray-700 self-start rounded-bl-none shadow-sm border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start bg-white p-3 rounded-xl rounded-bl-none shadow-sm border border-gray-100 flex gap-2 items-center text-gray-500 text-xs">
                <Loader2 size={14} className="animate-spin text-brand-orange" />
                <span className="italic">Nyantuy AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tanya soal franchise..."
              className="flex-1 text-sm bg-gray-50 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !query.trim()}
              className="p-2 bg-brand-orange text-white rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-orange-200"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-brand-dark text-white pl-4 pr-2 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="font-medium text-sm">Ask AI</span>
          <div className="bg-brand-orange p-3 rounded-full group-hover:rotate-12 transition-transform">
            <MessageCircle size={24} fill="white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;