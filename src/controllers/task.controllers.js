import tasks from "../models/tasks";
import Task from "../models/tasks";

export const findAllTasks = async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
};

export const createTask = async (req, res) => {
	const newTask = new Task({
		tittle: req.body.tittle,
		description: req.body.description,
		done: req.body.done ? req.body.done : false,
	});

	const taskSaved = await newTask.save();
	res.json(taskSaved);
};

export const findAllDoneTasks = async (req, res) => {
	const tasksDone = await Task.find({ done: true });
	res.json(tasksDone);
};

export const findOneTask = async (req, res) => {
	const task = await Task.findById(req.params.id);
	res.json(task);
};

export const deleteTask = async (req, res) => {
	await Task.findByIdAndDelete(req.params.id);
	res.json({
		message: "Task was deletes succesfull",
	});
};
