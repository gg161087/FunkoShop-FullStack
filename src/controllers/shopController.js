import itemService from '../services/itemService.js';

const shopView = async (req, res) => {
    const items = await itemService.getAllItems();
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
    const item = await itemService.getItem(id);
    const { data } = item;

    if (!data[0]) {
        res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    }

    res.render('./shop/detail', {
        view: {
            title: "Item | Funkoshop"
        },
        item: data[0]
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