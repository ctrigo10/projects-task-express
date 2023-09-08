import { Router } from 'express';
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js';

const router = Router();

// Routes
router.get('/', getTasks);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/:id', getTask);

export default router;
