import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Hello! I'm the Wisdom Studio AI. How can I help you engineer your next digital legacy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: "You are the AI assistant for Wisdom Studio, an elite web and app development company. You are professional, technically savvy, and helpful. You represent the agency's values: technical rigor, brutal clarity, and relentless grit. Keep responses concise and focused on how Wisdom Studio can help the user with web and mobile development. Do not discuss hosting as we don't provide it."
        }
      });

      const aiText = response.text || "I'm sorry, I encountered an error processing your request.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, my systems are currently offline. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[100] bg-studio-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-2 group border border-studio-dark/10"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold uppercase tracking-widest text-[10px]">
          Wisdom AI
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-[110] w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-studio-surface border border-studio-line rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-studio-line bg-studio-bg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-studio-accent rounded-full flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div>
                   <p className="font-display font-black uppercase text-sm tracking-tight text-studio-dark">Wisdom_AI</p>
                   <p className="text-[10px] text-studio-accent uppercase font-bold tracking-widest">Active_Node</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-studio-dark/40 hover:text-studio-dark transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar bg-studio-surface/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-sm text-sm ${
                    msg.role === 'user' 
                      ? 'bg-studio-accent text-white font-medium shadow-lg' 
                      : 'bg-white border border-studio-line text-studio-dark/80'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-studio-line p-3 rounded-sm">
                    <Loader2 size={16} className="animate-spin text-studio-accent" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-studio-line bg-studio-bg">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="w-full bg-studio-surface border border-studio-line rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-studio-accent transition-colors uppercase font-mono placeholder:text-studio-dark/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-studio-accent disabled:text-studio-dark/10 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-2 text-[8px] text-center text-studio-dark/20 uppercase font-mono tracking-widest">Powered by Gemini AI_Core</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
