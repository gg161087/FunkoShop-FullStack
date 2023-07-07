import { pool } from '../config/dbConfig.js';

const getAllProducts = async () => {
    let sql = 'SELECT * FROM product;';
    try {
      const [rows] = await pool.query(sql);
        return rows;
    } catch (error) {
        throw new Error('Error al obtener los productos desde la base de datos.');
    }
};
  
const getProductsWithFilter = async (filtros) => {
    let sql = 'SELECT * FROM product';
    
    let whereClause = '';
    let values = [];

    if (filtros.nombre) {
        whereClause += 'nombre LIKE ? AND ';
        values.push(`%${filtros.nombre}%`);
    }

    if (filtros.precioMin && filtros.precioMax) {
        whereClause += 'precio BETWEEN ? AND ? AND ';
        values.push(filtros.precioMin, filtros.precioMax);
    } else if (filtros.precioMin) {
        whereClause += 'precio > ? AND ';
        values.push(filtros.precioMin);
    } else if (filtros.precioMax) {
        whereClause += 'precio < ? AND ';
        values.push(filtros.precioMax);
    }

    if (whereClause !== '') {        
        whereClause = 'WHERE ' + whereClause.slice(0, -5);
        sql += ' ' + whereClause;        
    }

    if (filtros.orden) {
        const orden = filtros.orden === 'desc' ? 'DESC' : 'ASC';
        sql += ` ORDER BY precio ${orden}`;
    }

    sql += ` LIMIT ${filtros.limite}`;

    try {
        const [result] = await pool.query(sql, values);      
        return result; 
    } catch (err) {
        throw new Error('Error al obtener los productos desde la base de datos.');
    }

}

/* const getProductById = async (id) => {
    let sql = 'SELECT * FROM product WHERE product_id = ?;';
    try {
        const [rows] = await pool.query(sql, [id]);
        return rows[0];
    } catch (error) {
        throw new Error('Error al obtener el producto desde la base de datos.');
    }
}; */

const getProduct = async (param) => {
    let sql = 'SELECT * FROM product WHERE ?';

    try {
        const [result] = await pool.query(sql, {param});              
        return result; 
    } catch (err) {
        throw new Error('Error al obtener el producto desde la base de datos.');
    }
};

const updateProduct = async (productId, updatedProduct) => {
    let sql = 'UPDATE product SET serie = ?, nombre = ?, imagen = ?, precio = ?, cuotas = ?, stock = ? WHERE id = ?;';
    try {
        const { serie, nombre, imagen, precio, cuotas, stock } = updatedProduct;
        const [result] = await pool.query(sql, [
            serie,
            nombre,
            imagen,
            precio,
            cuotas,
            stock,
            productId,
        ]);
        return result;
    } catch (error) {
        throw new Error('Error al actualizar el producto en la base de datos.');
    }
};

const createProduct = async (nuevoProducto) => {
    let sql = 'INSERT INTO product(serie, nombre, imagen, precio, cuotas, stock) VALUES (?, ?, ?, ?, ?, ?)'
    try {
        const { serie, nombre, imagen, precio, cuotas, stock } = nuevoProducto;
        const [result] = await pool.query(sql, [
            serie,
            nombre,
            imagen,
            precio,
            cuotas,
            stock
        ]);
        return result       
    } catch (error) {
        throw new Error('Error al crear producto desde la base de datos.');
    }
};

const deleteProduct = async (productId) => {
    let sql = 'DELETE FROM product WHERE id = ?;';
    try {
        const [result] = await pool.query(sql, [productId]);
        return result;
    } catch (error) {
        throw new Error('Error al eliminar el producto de la base de datos.');
    }
};

export default {
    getAllProducts,
    getProductsWithFilter,
    /* getProductById, */
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}