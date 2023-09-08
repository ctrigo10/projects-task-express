"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_js_1 = require("../controllers/project.controller.js");
const router = (0, express_1.Router)();
// Routes
router.get('/', project_controller_js_1.getProjects);
router.post('/', project_controller_js_1.createProject);
router.get('/:id', project_controller_js_1.getProject);
router.put('/:id', project_controller_js_1.updateProject);
router.delete('/:id', project_controller_js_1.deleteProject);
router.get('/:id/tasks', project_controller_js_1.getProjectTasks);
router.get('/all/tasks/all', project_controller_js_1.getProjectsTasks);
exports.default = router;
//# sourceMappingURL=projects.routes.js.map