// src/server.js
import express from "express";
import cors from "cors";
import "dotenv/config";

import { errors } from "celebrate";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { connectMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import authRouters from "./routes/authRouters.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());

//? ================Routers================

app.use(authRouters);

//? ================Middlewares================

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

//?===========================================

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
