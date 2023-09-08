import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';

interface TaskAttributes {
  id: number;
  name: string;
  done: boolean;
  projectId?: number;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

interface TaskInstance
  extends Model<TaskAttributes, TaskCreationAttributes>,
    TaskAttributes {
  createdAt?: Date;
  updateAt?: Date;
}

export const Task = sequelize.define<TaskInstance>('tasks', {
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
