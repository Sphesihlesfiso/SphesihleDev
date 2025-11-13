// src/config.ts
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  dbUser: process.env.USER,
  dbPassword: process.env.PASSWORD,
  dbName: process.env.DATABASE,
  dbHost: process.env.HOST,
  dbPort: process.env.DB_PORT,
  apiKey: process.env.API_KEY,
  debug: process.env.DEBUG === 'true',
  secretKey: process.env.KEY,
};
