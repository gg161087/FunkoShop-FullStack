import productService from '../services/productService.js';

const shopView = async (req, res) => {
    const items = await productService.getProducts();
    const { data } = items;
    res.render('./shop/shop', {
        view: {
            title: "Shop | Funkoshop"
        },
        items: data
    });
}
const detailView = async (req, res) => {
    const id = req.params.id;
    const item = await productService.getProduct(id);
    const licence_id = item.data[0].licence_id;
    const products = await productService.getProductsByLicence(licence_id);

    if (!item.data[0]) {
        res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    }

    res.render('./shop/detail', {
        view: {
            title: "Item | Funkoshop"
        },
        item: item.data[0],
        products: products.data,
        sliderTitle: 'Productos Relacionados'
    });
}
const addItemToCart = (req, res) => res.send('Route to add a item to cart');
const cartView = (req, res) => res.send('Cart View Route');
const checkout = (req, res) => res.send('Route to receive the selected products and init the buy process');

export default {
    shopView,
    detailView,
    addItemToCart,
    cartView,
    checkout
};