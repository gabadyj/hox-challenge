import 'dotenv/config';

declare let process: {
  env: {
    NODE_ENV: 'dev';
    PORT: number;
    DB_TYPE: 'postgres';
    DB_URL?: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_LOGS: boolean;
  };
};

export const {
  NODE_ENV = 'dev',
  PORT = 3000,
  DB_TYPE = 'postgres',
  DB_URL,
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USERNAME = 'root',
  DB_PASSWORD = 'root',
  DB_NAME = 'hox_api_challenge',
  DB_LOGS = true,
} = process.env;
