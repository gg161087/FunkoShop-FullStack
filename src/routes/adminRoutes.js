import { Router} from 'express';

import adminController from '../controllers/adminController.js';
import { uplodadFile } from '../middleware/uploadFiles.js';
import { loginValidations, validateInput } from '../middleware/auth.js';

const router = Router();

router.get('/', adminController.adminView);
router.get('/create', adminController.createView);
router.post('/create', uplodadFile.array('images', 2), adminController.createProduct);
router.post('/create/bulk', adminController.bulkCreate);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editProduct);
router.delete('/delete/:id', adminController.deleteProduct);
router.get('/login', adminController.loginView);
router.post('/login', loginValidations, validateInput, adminController.loginUser);
router.get('/register', adminController.registerView);
router.post('/register', adminController.registerUser);

export default router;