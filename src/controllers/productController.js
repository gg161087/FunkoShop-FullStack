import productService from '../services/productService.js';
import { errorGetting, errorNotExist } from '../utils/errorHandlers.js';

const shopView = async (req, res) => {
    const products = await productService.getProducts();
    if(!products.isError) {
        res.render('./shop/shop', {
            view: {
                title: "Shop | Funkoshop"
            },
            products: products.data
        });
    } else {
        errorGetting(res);
    }   
}
const detailView = async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);    
    const licence_id = product.data[0].licence_id;
    const products = await productService.getProductsByLicence(licence_id);

    if (!product.isError) {
        res.render('./shop/detail', {
            view: {
                title: "Item | Funkoshop"
            },
            product: product.data[0],
            products: products.data,
            sliderTitle: 'Productos Relacionados'
        });                
    } else {
        errorNotExist(res);
    } 
}
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