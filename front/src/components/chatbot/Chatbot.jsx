import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const sendMessage = async (msg) => {
    if (!msg) return;

    // Agregar mensaje del usuario
    setMessages((prev) => [...prev, { text: msg, sender: "user" }]);
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();

      // Agregar mensaje del bot
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "No pude conectarme al servidor.", sender: "bot" },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-tr from-indigo-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl fixed bottom-6 right-6"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.15 }}
        >
          <FaComments size={24} />
        </motion.div>
      )}

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="w-80 h-[500px] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl mt-4 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header con botón cerrar */}
            <div className="flex justify-between items-center p-3 bg-indigo-500 text-white">
              <span>Vamos a charlar 🤖</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-lg"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <ChatMessage key={i} message={m} />
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-200 text-gray-800 p-2 rounded-lg max-w-xs animate-pulse"
                  >
                    escribiendo...
                  </motion.div>
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            {/* Input */}
            <div className="p-2 border-t border-gray-300 bg-white/80 backdrop-blur-sm">
              <ChatInput sendMessage={sendMessage} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
