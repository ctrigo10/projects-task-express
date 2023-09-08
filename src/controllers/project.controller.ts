import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';
import { Request, Response } from 'express';
import logger from '../logs/logger.js';

export async function getProjects(req: Request, res: Response) {
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description'],
    });

    res.json(projects);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function createProject(req: Request, res: Response) {
  console.log('Creating project', req.body);
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
      },
      {
        fields: ['name', 'priority', 'description'],
      }
    );
    return res.json(newProject);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function getProject(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: { id },
    });
    return res.json(project);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function updateProject(req: Request, res: Response) {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    if (!project) {
      throw new Error('Error');
    }
    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();

    return res.json(project);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function deleteProject(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { projectId: id },
    });
    await Project.destroy({
      where: { id },
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

export async function getProjectTasks(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      where: { projectId: id },
    });
    return res.json(tasks);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}

export async function getProjectsTasks(req: Request, res: Response) {
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description'],
      include: [
        {
          model: Task,
          attributes: ['id', 'name'],
          required: true,
        },
      ],
    });

    res.json(projects);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({
        message: error.message,
      });
    else logger.error(error);
  }
}
