
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, Paperclip, Image as ImageIcon } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
  image?: string;
}

interface AiAssistantProps {
  isDark: boolean;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello! I'm Kaushal's AI assistant. You can ask me questions or even upload an image for me to analyze!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert("Please select an image smaller than 4MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        setSelectedImage({
          data: base64Data,
          mimeType: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMsgText = input.trim();
    const currentImage = selectedImage;
    
    // UI update for user message
    const newUserMessage: Message = { 
      role: 'user', 
      text: userMsgText || (currentImage ? "Look at this image" : ""),
      image: currentImage ? `data:${currentImage.mimeType};base64,${currentImage.data}` : undefined
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setSelectedImage(null);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let contents;
      if (currentImage) {
        contents = {
          parts: [
            { text: userMsgText || "Analyze this image in the context of Kaushal's portfolio." },
            { 
              inlineData: { 
                data: currentImage.data, 
                mimeType: currentImage.mimeType 
              } 
            }
          ]
        };
      } else {
        contents = userMsgText;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: `You are an AI assistant for Kaushal Raj Gupta's portfolio. 
          Kaushal is a Full Stack Developer & Cybersecurity specialized engineer from Odisha, India.
          His skills: React, Next.js, TS, Node, Security research.
          If the user uploads an image, analyze it professionally. It might be a screenshot of his code, a UI design, or a security report.
          Be helpful, professional, and concise. Highlight Kaushal's strengths in both dev and security.`,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily unavailable. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[60] px-8 py-5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 ${
          isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'
        }`}
      >
        <Sparkles size={24} className="animate-pulse" />
        <span className="font-bold text-sm tracking-tight">Talk to Kaushal's AI</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[70] w-[90vw] md:w-[450px] h-[650px] rounded-[3rem] glass shadow-2xl overflow-hidden flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className={`p-6 flex justify-between items-center border-b ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Multimodal Portfolio Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Powered by Gemini 3</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2.5 hover:bg-white/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? (isDark ? 'bg-white text-black font-bold' : 'bg-zinc-900 text-white font-bold')
                      : (isDark ? 'bg-white/10 text-zinc-200' : 'bg-zinc-100 text-zinc-800 shadow-sm')
                  }`}>
                    {msg.image && (
                      <img 
                        src={msg.image} 
                        alt="Uploaded context" 
                        className="rounded-2xl mb-3 max-h-48 w-full object-cover border border-black/10" 
                      />
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`p-4 rounded-3xl bg-white/5 animate-pulse`}>
                    <div className="flex gap-2">
                      <div className="h-1.5 w-1.5 bg-zinc-500 rounded-full" />
                      <div className="h-1.5 w-1.5 bg-zinc-500 rounded-full" />
                      <div className="h-1.5 w-1.5 bg-zinc-500 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Attachment Preview */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-2"
                >
                  <div className="relative inline-block">
                    <img 
                      src={`data:${selectedImage.mimeType};base64,${selectedImage.data}`} 
                      className="h-20 w-20 object-cover rounded-xl border-2 border-indigo-500 shadow-lg" 
                      alt="Preview"
                    />
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full shadow-lg"
                    >
                      <X size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer / Input */}
            <div className={`p-6 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
              <div className="relative flex items-center gap-2">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-3 rounded-full transition-all border ${
                    isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10' : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:bg-zinc-200'
                  }`}
                  title="Upload image"
                >
                  <Paperclip size={20} />
                </button>
                
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={selectedImage ? "Describe the image..." : "Ask me something..."}
                    className={`w-full py-4 px-6 rounded-full text-sm outline-none border transition-all ${
                      isDark 
                        ? 'bg-white/5 border-white/10 focus:border-white/30 text-white' 
                        : 'bg-zinc-100 border-zinc-200 focus:border-zinc-400 text-zinc-900'
                    }`}
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all active:scale-90 ${
                      isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-black shadow-lg'
                    }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;
