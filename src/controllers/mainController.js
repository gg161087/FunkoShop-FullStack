import productService from '../services/productService.js';
import licenceService from '../services/licenceService.js';

const homeView = async (req, res) => {
    const licences = await licenceService.getLicences();
    const products = await productService.getProducts();    
    res.render('home', {
        view: {
            title: "Home | Funkoshop"
        },
        licences: licences.data,
        products: products.data,
        sliderTitle: 'Últimos Lanzamientos'
    });
};
const contactView = (req, res) => res.send('Contact View Route');
const aboutView = (req, res) => res.send('About View Route');
const faqsView = (req, res) => res.send('FAQs View Route');

export default {
    homeView,    
    contactView,
    aboutView,
    faqsView
};