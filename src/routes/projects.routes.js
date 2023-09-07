import { Router } from 'express';
import { getProjects } from '../controllers/project.controller.js';

const router = Router();

// Routes
router.get('/', getProjects);

router.post('/');

router.put('/:id');

router.delete('/:id');

router.get('/:id');

export default router;
