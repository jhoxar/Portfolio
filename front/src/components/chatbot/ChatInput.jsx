import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    sendMessage(input); // Llama a la función del Chatbot
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <motion.input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        type="submit"
        className="bg-indigo-500 text-white px-4 rounded-lg hover:bg-indigo-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enviar
      </motion.button>
    </form>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
