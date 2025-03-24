import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import { createError } from "./utils/errors.js";
import { connect2DB } from "./utils/db.js";
import usersRouter from './routers/users.js';
import ordersRouter from './routers/orders.js';


dotenv.config();

/* ------------ create application ------------ */
const app = express();

/* --------- create a connection to DB -------- */
connect2DB();

/* ---------------- middleware ---------------- */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/* ------------------ routers ----------------- */
app.use("/users", usersRouter);
app.use('/orders', ordersRouter);


/* --------------- error handler -------------- */
app.use((req, res, next) => {
  next(createError("Route not defined!", 404));
});

app.use((error, req, res, next) => {
  if (error) res.status(error.status).json({ msg: error.message });
  next();
});

/* ------------------- port ------------------- */
const port = process.env.PORT || 3001;
app.listen(port, console.log(`🚀 Server is running on: http://localhost:${port}`));
