import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define(
  'projects',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //autoIncrement: false,
      //defaultValue: () => { }
      //allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'nombre del producto',
    },
    priority: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: 'la prioridad',
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetKey: 'id',
});
