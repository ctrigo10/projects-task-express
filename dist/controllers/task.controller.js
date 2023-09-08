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
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getTasks = void 0;
const Task_js_1 = require("../models/Task.js");
const logger_js_1 = __importDefault(require("../logs/logger.js"));
function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tasks = yield Task_js_1.Task.findAll({
                attributes: ['id', 'projectId', 'name', 'done'],
                order: [['id', 'DESC']],
            });
            res.json(tasks);
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
exports.getTasks = getTasks;
function createTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, done, projectId } = req.body;
        try {
            const newTask = yield Task_js_1.Task.create({
                projectId,
                name,
                done,
            });
            res.json(newTask);
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
exports.createTask = createTask;
function getTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const task = yield Task_js_1.Task.findOne({
                where: { id },
            });
            return res.json(task);
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
exports.getTask = getTask;
function updateTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const task = yield Task_js_1.Task.findOne({
                attributes: ['name', 'projectId', 'done', 'id'],
                where: { id },
            });
            if (!task) {
                throw new Error('Error');
            }
            task.set(req.body);
            yield task.save();
            return res.json(task);
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
exports.updateTask = updateTask;
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Task_js_1.Task.destroy({
                where: { projectId: id },
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
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.controller.js.map