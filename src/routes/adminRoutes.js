import { Router} from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import adminController from '../controllers/adminController.js';
import licenceService from '../services/licenceService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {                       
        const licences = await licenceService.getLicences();        
        const licence = licences.data[Number(req.body.licence) -1];
        const dirLicence = licence.licence_image.split('/')[0];                       
        cb(null, resolve(__dirname, `../../public/img/${dirLicence}/`));
    },
    filename: (req, file, cb) => {        
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uplodadFile = multer({storage});

router.get('/', adminController.adminView);
router.get('/create', adminController.createView);
router.post('/create', uplodadFile.array('images', 2), adminController.createProduct);
router.post('/create/bulk', adminController.bulkCreate);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editProduct);
router.delete('/delete/:id', adminController.deleteProduct);
router.get('/login', adminController.loginView);
router.post('/login', adminController.loginUser);
router.get('/register', adminController.registerView);
router.post('/register', adminController.registerUser);

export default router;