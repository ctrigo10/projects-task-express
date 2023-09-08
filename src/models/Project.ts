import { DataTypes, Optional, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { Task } from './Task';

interface ProjectAttributes {
  id: number;
  name: string;
  priority: number;
  description: string;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id'> {}

interface ProjectInstance
  extends Model<ProjectAttributes, ProjectCreationAttributes>,
    ProjectAttributes {
  createdAt?: Date;
  updateAt?: Date;
}

export const Project = sequelize.define<ProjectInstance>(
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
