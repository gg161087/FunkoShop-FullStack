import itemService from '../services/itemService.js';
import categoryService from '../services/categoryService.js';
import licenceService from '../services/licenceService.js';

const adminView = async (req, res) => {
    const { data } = await itemService.getAllItems();
    res.render('admin/admin', {
        view: {
            title: 'List of Products | Admin Funkoshop'
        },
        items: data
    });
};
const createView = async (req, res) => {
    res.render('admin/create', {
        view: {
            title: 'Create Product | Admin Funkoshop'
        }
    });
};
const createItem = async (req, res) => {
    const item = req.body;
    await itemService.createItem(item);
    res.redirect('admin');
};
const bulkCreate = async (req, res) => {
    const items = req.body;
    const result = await itemService.create(items.map(el => Object.values(el)));
    res.send(result);
};
const editView = async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await categoryService.getAllItems();
    const { data: licences } = await licenceService.getAllItems();
    const { data } = await itemService.getItem(id);    
    res.render('admin/edit', {
        view: {
            title: `Edit Product #${id} | Admin Funkoshop`
        },
        item: data[0],
        categories,
        licences
    });
};
const editItem = async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    await itemService.editItem(item, id);    
    res.redirect('/admin');
};
const deleteItem = async (req, res) => {
    const id = req.params.id;

    await itemService.deleteItem(id);
    res.redirect('/admin');
};
const loginView = (req, res) => res.render('auth/login', {
    view: {
        title: 'Login | Funkoshop'
    }
});
const loginUser = (req, res) => res.send('Login Route that receive the data when user click login button');
const registerView = (req, res) => res.render('auth/register', {
    view: {
        title: 'Register | Funkoshop'
    }
});
const registerUser = (req, res) => res.send('Register Route that receive the data when user click register button');

export default {
    adminView,
    createView,
    createItem,
    bulkCreate,
    editView,
    editItem,
    deleteItem,
    loginView,
    loginUser,
    registerView,
    registerUser
}