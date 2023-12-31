import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Task = sequelize.define('tasks', {
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
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
