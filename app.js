import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import router from "./src/routes/mail.routes.js";

dotenv.config();

//fix para dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//iniciar express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());


app.use("/api", router);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

//server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});