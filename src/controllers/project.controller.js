import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description'],
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProject(req, res) {
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
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: { id },
    });
    return res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();

    return res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteProject(req, res) {
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
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProjectTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      where: { projectId: id },
    });
    return res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProjectsTasks(req, res) {
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
    res.status(500).json({
      message: error.message,
    });
  }
}
