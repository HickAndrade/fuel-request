import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOST, DIALECT } = process.env;

export const databaseCredentials = {
  development: {
    username: DB_USER as string,
    password: DB_PASSWORD,
    database: DB_NAME as string,
    host: DB_HOST,
    port: DB_PORT as unknown as number,
    dialect: DIALECT as Dialect
  },
  test: {
    username: DB_USER as string,
    password: DB_PASSWORD,
    database: DB_NAME as string,
    host: DB_HOST,
    port: DB_PORT as unknown as number,
    dialect: DIALECT as Dialect
  },
  production: {
    username: DB_USER as string,
    password: DB_PASSWORD,
    database: DB_NAME as string,
    host: DB_HOST,
    port: DB_PORT as unknown as number,
    dialect: DIALECT as Dialect
  }
};

const { username, password, database, host, port, dialect } = databaseCredentials.development;

export const connection = new Sequelize(database, username, password, {
  dialect,
  host,
  port
});
