"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Import routes
const projects_routes_1 = __importDefault(require("./routes/projects.routes"));
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// Routes
app.use('/api/projects', projects_routes_1.default);
app.use('/api/tasks', tasks_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map