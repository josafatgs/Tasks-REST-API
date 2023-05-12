import express from "express";
import MainRoutes from "./routes/task.routes.js";

const app = new express();

//settigs
app.set("port", process.env.PORT || 3000);
app.use(express.json());

//routes
app.use(MainRoutes);

export default app;
