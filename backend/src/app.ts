import express from "express";
import { config } from "dotenv";
import morgan from "morgan"
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
config();
const app= express();
//middlewares
app.use(cors({origin:"http://localhost:5174",credentials:true}))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
//remove it in prodection
app.use(morgan("dev"))

app.use("/api/v1",appRouter)
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// console.log('dirname',__dirname);

// app.use(express.static(path.join(__dirname, '../frontend/dist')))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))})


export default app