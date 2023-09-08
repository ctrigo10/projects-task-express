import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'project_db', // db name
  'postgres', // username
  'postgres', // password
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
