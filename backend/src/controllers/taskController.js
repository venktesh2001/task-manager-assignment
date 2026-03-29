const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user.id
  });

  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!task) return res.status(404).json({ msg: "Not found" });

  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ msg: "Task not found" });

  // check ownership
  if (task.user.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Unauthorized" });
  }

  // update fields manually
  if (req.body.title) task.title = req.body.title;
  if (req.body.description) task.description = req.body.description;

  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ msg: "Deleted" });
};