import Task from "../models/tasks";
import { getPagination } from "../libs/getPagination";

export const findAllTasks = async (req, res) => {
	try {
		const {size, page} = req.query;

		const {limit, offset} = getPagination(page, size);

		const tasks = await Task.paginate({}, {offset, limit});

		res.json(tasks);
	} catch (error) {
		res.status(500).json({
			message:
				error.message || "Something goes wrong retrieving the tasks",
		});
	}
};

export const createTask = async (req, res) => {
	try {
		const newTask = new Task({
			tittle: req.body.tittle,
			description: req.body.description,
			done: req.body.done ? req.body.done : false,
		});

		const taskSaved = await newTask.save();
		res.json(taskSaved);
	} catch (error) {
		res.status(500).json({
			message: error.message || "Something goes wrong creating a tasks",
		});
	}
};

export const findAllDoneTasks = async (req, res) => {
	const tasksDone = await Task.find({ done: true });
	res.json(tasksDone);
};

export const findOneTask = async (req, res) => {
	const { id } = req.params;
	try {
		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json({
				message: `Task with id ${id} does not exists`,
			});
		}

		res.json(task);
	} catch (error) {
		res.status(500).json({
			message: `Error Retrieving Task with id ${req.params.id}.`,
		});
	}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;

	try {
		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json({
				message: `Task with id ${id} does not exists`,
			});
		}

		await Task.findByIdAndDelete(req.params.id);
		res.json({
			message: "Task was deletes succesfull",
		});
	} catch (error) {
		res.status(500).json({
			message: `Cannot delete Task with id ${req.params.id}.`,
		});
	}
};

export const updateTask = async (req, res) => {
	await Task.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		message: "Task was updated succesfull",
	});
};
