import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const sendMessage = async (text) => {
    const newMessage = { type: "user", text };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Oops, algo salió mal." },
      ]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 right-5 w-80 md:w-96 flex flex-col z-50"
    >
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center font-semibold"
      >
        {open ? "Close Chat ✖️" : "Chat with Jhon 🤖"}
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mt-2 bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <motion.div
              className="p-4 bg-green-700 text-white font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Chat with Jhon 🤖
            </motion.div>

            {/* Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <ChatMessage key={i} message={msg} />
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <ChatInput sendMessage={sendMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Chatbot;
