import categoryService from '../services/categoryService.js'
import productService from '../services/productService.js';
import licenceService from '../services/licenceService.js';
import { message } from '../utils/errorHandlers.js';

const homeView = async (req, res) => {
    const categories = await categoryService.getCategories();
    const licences = await licenceService.getLicences();
    const products = await productService.getProducts();  
    if (!products.isError && !licences.isError) {
        res.render('home', {
            view: {
                title: 'Home | Funkoshop',
            },            
            categories: categories.data,
            licences: licences.data,
            products: products.data,
            sliderTitle: 'Últimos Lanzamientos'
        });        
    } else {
        message(res, 503, 'Error 503 | Funkoshop', 'ERROR 503', 'Hubo un error inesperado, intente más tarde.', '/', 'HOME');
    }     
};
const contactView = async (req, res) => {
    const categories = await categoryService.getCategories();
    
    res.render('message', {
        view: {
            title: 'Contact | Funkoshop'
        },
        href: {
            route: '/',
            text: 'HOME'
        },
        categories: categories.data,
        title: 'Email contact',
        description: 'gg161087@gmail.com' 
    });
};
const aboutView = async (req, res) => {
    const categories = await categoryService.getCategories();

    res.render('message', {
        view: {
            title: 'About | Funkoshop'
        },
        href: {
            route: '/',
            text: 'HOME'
        },
        categories: categories.data,
        title: 'About',
        description: 'About View Route' 
    });
};
const faqsView = async (req, res) => {
    const categories = await categoryService.getCategories();

    res.render('message', {
        view: {
            title: 'About | Funkoshop'
        },
        href: {
            route: '/',
            text: 'HOME'
        },
        categories: categories.data,
        title: 'About',
        description: 'FAQs View Route' 
    });    
};

export default {
    homeView,    
    contactView,
    aboutView,
    faqsView
};