import { Router } from "express";
import * as taskControllers from "../controllers/task.controllers";

const router = Router();

router.get("/", taskControllers.findAllTasks);

router.post("/", taskControllers.createTask);

router.get("/done", taskControllers.findAllDoneTasks);

router.get("/:id", taskControllers.findOneTask);

router.delete("/:id", taskControllers.deleteTask);

router.put("/:id", taskControllers.updateTask);


export default router;
