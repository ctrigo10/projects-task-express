import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'project', // db name
  'postgres', // username
  'postgres', // password
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
