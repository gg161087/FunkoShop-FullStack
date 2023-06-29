import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DATABASE = process.env.DATABASE || 'comision27077';
const USER = process.env.USER || 'root';
const PASSWORD = process.env.PASSWORD || '';

export {
    PORT,
    HOST,
    DB_HOST,
    DATABASE,
    USER,
    PASSWORD
}