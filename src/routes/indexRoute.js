import { Router} from 'express';

import productsRouter from './productsRoute.js';

export const router = Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'hola mundo'});
});
router.get('/productos', (req, res) => {
    res.render('productos', {titulo: 'Productos'});
});

router.use('/api/productos', productsRouter);

router.use((req, res) => {
    res.status(404).render('404', {
        titulo: 'Error 404',
        descripcion: 'Página no encontrada'
    });
});