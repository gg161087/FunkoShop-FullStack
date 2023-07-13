import productService from '../services/productService.js';
import categoryService from '../services/categoryService.js';
import licenceService from '../services/licenceService.js';
import { errorGetting } from '../utils/errorHandlers.js'

const adminView = async (req, res) => {
    const products = await productService.getProducts();
    if (!products.isError) {
        res.render('admin/admin', {
            view: {
                title: 'List of Products | Admin Funkoshop'
            },
            products: products.data     
        });
    } else {
        errorGetting(res);
    }    
};
const createView = async (req, res) => {
    res.render('admin/create', {
        view: {
            title: 'Create Product | Admin Funkoshop'
        }
    });
};
const createProduct = async (req, res) => {
    const body = req.body;
    const result = await productService.createProduct(body);
    res.redirect('admin');
};
const bulkCreate = async (req, res) => {
    const body = req.body;
    const result = await productService.createProduct(body.map(item => Object.values(item)));
    res.send(result);
};
const editView = async (req, res) => {
    const id = req.params.id;
    const categories = await categoryService.getCategories();
    const licences = await licenceService.getLicences();
    const product = await productService.getProduct(id);    
    res.render('admin/edit', {
        view: {
            title: `Edit Product #${id} | Admin Funkoshop`
        },
        product: product.data[0],
        categories: categories.data,
        licences: licences.data
    });
};
const editProduct = async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    await productService.editProduct(item, id);    
    res.redirect('/admin');
};
const deleteProduct = async (req, res) => {
    const id = req.params.id;

    await productService.deleteProduct(id);
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
    createProduct,
    bulkCreate,
    editView,
    editProduct,
    deleteProduct,
    loginView,
    loginUser,
    registerView,
    registerUser
}