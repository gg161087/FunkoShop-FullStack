import { Router} from 'express';

import productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.shopView);
router.get('/item/:id', productController.detailView);
router.post('/item/:id/add', productController.addProductToCart);
router.get('/cart', productController.cartView);
router.post('/cart', productController.checkout);

export default router;