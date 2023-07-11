import express from 'express';
import methodOverride from 'method-override';

import { HOST, PORT } from './src/config/serverConfig.js';

import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import { notFoundPage } from './src/utils/errorHandlers.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.set('port', PORT);

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use(notFoundPage);

app.listen(PORT, () => {console.log(`Servidor corriendo http://${HOST}:${PORT}`)});