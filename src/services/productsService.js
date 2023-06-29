import productsModel from '../models/productsModel.js';

const getAllProducts = async () => {
    try {
        const products = await productsModel.getAllProducts();
        return products;
    } catch (error) {
        throw new Error(`Error al obtener los productos del modelo. Error: ${error}`);
    }
};

const getProductsWithFilter = async (filtros) => { 
    try {        
        const products = await productsModel.getProductsWithFilter(filtros);
        return products;
    } catch (error) {
        throw new Error('Error al obtener los productos en el servicio.');
    }   
};

const getProductById = async (id) => {    
    try {
        const product = await productsModel.getProductById(id);
        return product;
    } catch (error) {
        throw new Error('Error al obtener el producto en el servicio.');
    }
};

const getProduct = async (param) => {
    try {
        const product = await productsModel.getProduct(param);
        return product;
    } catch (error) {
        throw new Error('Error al obtener el producto en el servicio.');
    }
};

const updateProduct = async (id, updatedProduct) => {
    try {
        const product = await productsModel.updateProduct(id, updatedProduct);
        return product;
    } catch (error) {
        throw new Error('Error al actualizar el producto en el servicio.');
    }
};

const deleteProduct = async (id) => {
    try {
        const product = await productsModel.deleteProduct(id);
        return product;
    } catch (error) {
        throw new Error('Error al eliminar el producto en el servicio.');
    }
};

export default {
    getAllProducts,
    getProductsWithFilter,
    getProductById,    
    getProduct,
    updateProduct,
    deleteProduct 
}