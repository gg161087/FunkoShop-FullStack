import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from './serverConfig.js';

export const pool = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});