"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('project_db', // db name
'postgres', // username
'postgres', // password
{
    host: 'localhost',
    dialect: 'postgres',
});
//# sourceMappingURL=database.js.map