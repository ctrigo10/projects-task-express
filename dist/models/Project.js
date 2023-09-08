"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Task_1 = require("./Task");
exports.Project = database_1.sequelize.define('projects', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        //autoIncrement: false,
        //defaultValue: () => { }
        //allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'nombre del producto',
    },
    priority: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        comment: 'la prioridad',
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
exports.Project.hasMany(Task_1.Task, {
    foreignKey: 'projectId',
    sourceKey: 'id',
});
Task_1.Task.belongsTo(exports.Project, {
    foreignKey: 'projectId',
    targetKey: 'id',
});
//# sourceMappingURL=Project.js.map