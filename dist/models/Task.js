"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Task = database_1.sequelize.define('tasks', {
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
    },
    done: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
});
//# sourceMappingURL=Task.js.map