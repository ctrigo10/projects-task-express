import { Request, Response } from 'express';
import { Task } from '../models/Task.js';
import logger from '../logs/logger.js';

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      order: [['id', 'DESC']],
    });

    res.json(tasks);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function createTask(req: Request, res: Response) {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      projectId,
      name,
      done,
    });
    res.json(newTask);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function getTask(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    return res.json(task);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      attributes: ['name', 'projectId', 'done', 'id'],
      where: { id },
    });

    if (!task) {
      throw new Error('Error');
    }

    task.set(req.body);

    await task.save();

    return res.json(task);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { projectId: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}
