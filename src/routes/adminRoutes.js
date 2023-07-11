import { Router} from 'express';

import adminController from '../controllers/adminContoller.js';

const router = Router();

router.get('/', adminController.adminView);
router.get('/create', adminController.createView);
router.post('/create', adminController.createItem);
router.post('/create/bulk', adminController.bulkCreate);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editItem);
router.delete('/delete/:id', adminController.deleteItem);
router.get('/login', adminController.loginView);
router.post('/login', adminController.loginUser);
router.get('/register', adminController.registerView);
router.post('/register', adminController.registerUser);

export default router