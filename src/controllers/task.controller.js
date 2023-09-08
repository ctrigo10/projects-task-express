import { Task } from '../models/Task.js';

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      order: [['id', 'DESC']],
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createTask(req, res) {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      projectId,
      name,
      done,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    return res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      attributes: ['name', 'projectId', 'done', 'id'],
      where: { id },
    });

    task.set(req.body);

    await task.save();

    return res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { projectId: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
