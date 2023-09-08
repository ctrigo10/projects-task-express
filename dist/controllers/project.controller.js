"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectsTasks = exports.getProjectTasks = exports.deleteProject = exports.updateProject = exports.getProject = exports.createProject = exports.getProjects = void 0;
const Project_js_1 = require("../models/Project.js");
const Task_js_1 = require("../models/Task.js");
const logger_js_1 = __importDefault(require("../logs/logger.js"));
function getProjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const projects = yield Project_js_1.Project.findAll({
                attributes: ['id', 'name', 'priority', 'description'],
            });
            res.json(projects);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.getProjects = getProjects;
function createProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Creating project', req.body);
        const { name, priority, description } = req.body;
        try {
            const newProject = yield Project_js_1.Project.create({
                name,
                priority,
                description,
            }, {
                fields: ['name', 'priority', 'description'],
            });
            return res.json(newProject);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.createProject = createProject;
function getProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const project = yield Project_js_1.Project.findOne({
                where: { id },
            });
            return res.json(project);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.getProject = getProject;
function updateProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, priority, description } = req.body;
        try {
            const project = yield Project_js_1.Project.findByPk(id);
            if (!project) {
                throw new Error('Error');
            }
            project.name = name;
            project.priority = priority;
            project.description = description;
            yield project.save();
            return res.json(project);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.updateProject = updateProject;
function deleteProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Task_js_1.Task.destroy({
                where: { projectId: id },
            });
            yield Project_js_1.Project.destroy({
                where: { id },
            });
            return res.sendStatus(204);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.deleteProject = deleteProject;
function getProjectTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const tasks = yield Task_js_1.Task.findAll({
                attributes: ['id', 'projectId', 'name', 'done'],
                where: { projectId: id },
            });
            return res.json(tasks);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.getProjectTasks = getProjectTasks;
function getProjectsTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const projects = yield Project_js_1.Project.findAll({
                attributes: ['id', 'name', 'priority', 'description'],
                include: [
                    {
                        model: Task_js_1.Task,
                        attributes: ['id', 'name'],
                        required: true,
                    },
                ],
            });
            res.json(projects);
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({
                    message: error.message,
                });
            else
                logger_js_1.default.error(error);
        }
    });
}
exports.getProjectsTasks = getProjectsTasks;
//# sourceMappingURL=project.controller.js.map