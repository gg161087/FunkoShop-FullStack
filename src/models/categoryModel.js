import { getConnection } from '../config/dbConfig.js';
const conn = getConnection();

const getCategories = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM category;');
        const response = {
            isError: false,
            data: rows
        };
        return response;      
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error;
    }
};

export default {
    getCategories,
};