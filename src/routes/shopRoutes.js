import { Router} from 'express';

import shopController from '../controllers/shopController.js';

const router = Router();

router.get('/', shopController.shopView);
router.get('/item/:id', shopController.detailView);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart', shopController.cartView);
router.post('/cart', shopController.checkout);

export default router;