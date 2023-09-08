import { Router } from 'express';
import {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectTasks,
  getProjectsTasks,
} from '../controllers/project.controller.js';

const router = Router();

// Routes
router.get('/', getProjects);

router.post('/', createProject);

router.get('/:id', getProject);

router.put('/:id', updateProject);

router.delete('/:id', deleteProject);

router.get('/:id/tasks', getProjectTasks);

router.get('/all/tasks/all', getProjectsTasks);

export default router;
