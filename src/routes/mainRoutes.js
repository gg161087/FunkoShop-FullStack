import { Router } from 'express';

import mainController from '../controllers/mainController.js';

const router = Router();

router.get('/', mainController.homeView);
router.get('/contact', mainController.contactView);
router.get('/about', mainController.aboutView);
router.get('/faqs', mainController.faqsView);

export default router
