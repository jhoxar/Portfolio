import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cliente de OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint del chatbot
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Eres un chatbot que representa el portafolio de JhoxarDev. Responde dudas sobre sus servicios, skills y experiencia de manera profesional y amigable." },
        { role: "user", content: message },
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al generar respuesta" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
