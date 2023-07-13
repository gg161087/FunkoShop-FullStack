import productService from '../services/productService.js';
import licenceService from '../services/licenceService.js';
import { errorGetting } from '../utils/errorHandlers.js';

const homeView = async (req, res) => {
    const licences = await licenceService.getLicences();
    const products = await productService.getProducts();
    if (!products.isError && !licences.isError) {
        res.render('home', {
            view: {
                title: "Home | Funkoshop"
            },
            licences: licences.data,
            products: products.data,
            sliderTitle: 'Últimos Lanzamientos'
        });        
    } else {
        errorGetting(res);
    }     
};
const contactView = (req, res) => {
    res.render('message', {
        view: {
            title: 'Contact | Funkoshop'
        },
        title: 'Email contact',
        description: 'gg161087@gmail.com' 
    });
};
const aboutView = (req, res) => {
    res.render('message', {
        view: {
            title: 'About | Funkoshop'
        },
        title: 'About',
        description: 'About View Route' 
    });
};
const faqsView = (req, res) => res.send('FAQs View Route');

export default {
    homeView,    
    contactView,
    aboutView,
    faqsView
};