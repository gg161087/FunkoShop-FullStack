import { Router } from 'express';
import { getAllProducts, getProductsWithFilter, getProductById, getProduct, createProduct, updateProduct, deleteProduct, } from '../controllers/productsController.js';

const router = Router();

router.get('/', getAllProducts);

router.get('/busqueda/', getProductsWithFilter);

router.get('/:id', getProductById);

router.get('/params/:params', getProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router; 