// src/server.js
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

import { errors } from "celebrate";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { connectMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouters.js";
import categoriesRouter from "./routes/categoriesRouters.js";
import feedbacksRouter from "./routes/feedbacksRouters.js";
import goodsRouter from "./routes/goodsRouters.js";
import ordersRouter from "./routes/ordersRouters.js";
import subscriptionsRouter from "./routes/subscriptionsRouters.js";
import usersRouter from "./routes/usersRouters.js";

const app = express();
const PORT = process.env.PORT ?? 4000;

const swaggerDocument = YAML.load("./swagger/openapi.yaml");

app.use(helmet());
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

app.use(authRouter);
app.use(categoriesRouter);
app.use(feedbacksRouter);
app.use(goodsRouter);
app.use(ordersRouter);
app.use(subscriptionsRouter);
app.use(usersRouter);

//? ================Swagger================

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//? ================Middlewares================

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

//?===========================================

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
