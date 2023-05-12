import express from "express";
import morgan from "morgan";
import cors from "cors";
import MainRoutes from "./routes/task.routes.js";

const app = new express();

//settigs
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/tasks",MainRoutes);

export default app;
