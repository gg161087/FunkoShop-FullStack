import { Router} from 'express';
import multer from 'multer';
import path from 'path';

import adminController from '../controllers/adminContoller.js';

const dirname = path.dirname(new URL(import.meta.url).pathname);

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(path.resolve(dirname, '../../public/img'));             
        cb(null, `${dirname}../../public/img`);
    },
    filename: (req, file, cb) => {        
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uplodadFile = multer({storage});

router.get('/', adminController.adminView);
router.get('/create', adminController.createView);
router.post('/create', uplodadFile.array('images', 2),  adminController.createProduct);
router.post('/create/bulk', adminController.bulkCreate);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editProduct);
router.delete('/delete/:id', adminController.deleteProduct);
router.get('/login', adminController.loginView);
router.post('/login', adminController.loginUser);
router.get('/register', adminController.registerView);
router.post('/register', adminController.registerUser);

export default router;