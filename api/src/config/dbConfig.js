import * as knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST || '127.0.0.1';
const port = process.env.DB_PORT || '5432';
const user = process.env.DB_USER || null;
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_NAME || 'reckonface';
const client = process.env.DB_CLIENT || 'pg';

const dbConnection = () => {
  try {
    if (!user) throw new Error('No user provided for the database');
    const db = knex.default({
      client,
      connection: {
        host,
        port,
        user,
        password,
        database,
      },
    });
    return db;
  } catch (err) {
    const errorMsg = err.message || err.error || 'Unexpected error with database';
    console.log(errorMsg);
    return null;
  }
};

export default dbConnection;
