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
  PORT = 3333,
  DB_TYPE = 'postgres',
  DB_URL,
  DB_HOST = 'localhost',
  DB_PORT = 5433,
  DB_USERNAME = 'postgres',
  DB_PASSWORD = 'docker',
  DB_NAME = 'hox_api_challenge',
  DB_LOGS = true,
} = process.env;
