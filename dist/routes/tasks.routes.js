"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_js_1 = require("../controllers/task.controller.js");
const router = (0, express_1.Router)();
// Routes
router.get('/', task_controller_js_1.getTasks);
router.post('/', task_controller_js_1.createTask);
router.put('/:id', task_controller_js_1.updateTask);
router.delete('/:id', task_controller_js_1.deleteTask);
router.get('/:id', task_controller_js_1.getTask);
exports.default = router;
//# sourceMappingURL=tasks.routes.js.map