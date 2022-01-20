import 'dotenv/config';

declare let process: {
  env: {
    NODE_ENV: 'dev';
    PORT: number;
  };
};

export const { NODE_ENV = 'dev', PORT = 3333 } = process.env;
