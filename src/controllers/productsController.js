import productsService from '../services/productsService.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
};

const getProductsWithFilter = async (req, res) => {

    const filtros = {
        nombre: req.query.nombre || '',
        precioMin: parseFloat(req.query.precioMin) || null,
        precioMax: parseFloat(req.query.precioMax) || null,
        orden: req.query.orden || '',
        limite: parseInt(req.query.limite) || 10
    }

    try {
        const productos = await productsService.getProductsWithFilter(filtros)
        res.json(productos)
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
    
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productsService.getProduct(productId);
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto.' });
    }   
};

const getProduct = async (req, res) => {
    const params = req.params;
    try {
        const product = await productsService.getProduct(params);
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto.' });
    }     
};

const createProduct = async (req, res) => {
    const newProduct = req.body;
    try {
        const product = await productsService.createProduct(newProduct);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto.' });
    }
};
 
const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    try {
        const product = await productsService.updateProduct(id, updatedProduct);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto.' });
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productsService.deleteProduct(id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto.' });
    }
};

export {
    getAllProducts,
    getProductsWithFilter,
    getProductById,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};