import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// ⚡ Cargar variables de entorno primero
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ⚡ Ahora sí, la API key ya está disponible
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Hubo un error en el servidor" });
  }
});

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
