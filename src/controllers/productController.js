import categoryService from '../services/categoryService.js';
import productService from '../services/productService.js';
import { message } from '../utils/errorHandlers.js';

const shopView = async (req, res) => {
    const categories = await categoryService.getCategories();
    const products = await productService.getProducts();

    if(!products.isError) {
        res.render('./shop/shop', {
            view: {
                title: "Shop | Funkoshop"
            },
            categories: categories.data,
            products: products.data
        });
    } else {
        message(res, 503, 'Error 503 | Funkoshop', 'ERROR 503', 'Hubo un error inesperado, intente más tarde.', '/', 'HOME');
    }   
};

const detailView = async (req, res) => {
    const id = req.params.id;
    const categories = await categoryService.getCategories();
    const product = await productService.getProduct(id);    
    
    if (!product.isError && product.data[0] ) {        
        const licence_id = product.data[0].licence_id;
        const products = await productService.getProductsByLicence(licence_id);
        res.render('./shop/detail', {
            view: {
                title: "Item | Funkoshop"
            },
            categories: categories.data,
            product: product.data[0],
            products: products.data,
            sliderTitle: 'Productos Relacionados'
        });                
    } else {
        message(res, 400, 'Error 400 | Funkoshop', 'ERROR 400', 'El producto con el ID seleccionado no existe o fue eliminado.', '/shop', 'VOLVER');
    } 
};

const addProductToCart = (req, res) => res.send('Route to add a item to cart');
const cartView = (req, res) => res.send('Cart View Route');
const checkout = (req, res) => res.send('Route to receive the selected products and init the buy process');

export default {
    shopView,
    detailView,
    addProductToCart,
    cartView,
    checkout
};