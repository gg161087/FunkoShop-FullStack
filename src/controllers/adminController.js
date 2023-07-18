import productService from '../services/productService.js';
import categoryService from '../services/categoryService.js';
import licenceService from '../services/licenceService.js';
import { errorGetting } from '../utils/errorHandlers.js';

const adminView = async (req, res) => {
    const categories = await categoryService.getCategories();
    const products = await productService.getProducts();
    if (!products.isError) {
        res.render('admin/admin', {
            view: {
                title: 'List of Products | Admin Funkoshop'
            },
            categories: categories.data,
            products: products.data
        });
    } else {
        errorGetting(res);
    }
};
const createView = async (req, res) => {
    const categories = await categoryService.getCategories();
    const licences = await licenceService.getLicences();

    res.render('admin/create', {
        view: {
            title: 'Create Product | Admin Funkoshop'
        },
        categories: categories.data,
        licences: licences.data
    });
};
const createProduct = async (req, res) => {
    const body = req.body;
    const files = req.files;    
    const result = await productService.createProduct(body, files);
    if(!result.isError) {
        res.redirect('/admin');
    } else {
        errorGetting(res);
    }  
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
    const body = req.body;
    const files = req.files; 
    const licences = await licenceService.getLicences();
    const lincence_name = licences.data[req.body.collection - 1].licence_name;
    let url_front = '';
    let url_back = '';
    let image_front = body.images
    let image_back = image_front.replace(/-1\.webp$/, "-box.webp");

    switch (lincence_name) {
        case 'Harry Potter':
            url_front = `harry-potter/${image_front}`;
            url_back = `harry-potter/${image_back}`;
            break;
        case 'Star Wars':
            url_front = `star-wars/${image_front}`;
            url_back = `star-wars/${image_back}`;
            break;
        case 'Pokemon':
            url_front = `pokemon/${image_front}`;
            url_back = `pokemon/${image_back}`;
            break;
        default:
            console.log('No has seleccionado ninguna película válida.');            
            break;
    }
    body.image_front = url_front;
    body.image_back = url_back;

    const result = await productService.editProduct(body, id);

    if (!result.isError) {
        const categories = await categoryService.getCategories();

        res.render('message', {
            view: {
                title: 'Message | Funkoshop'
            },
            categories: categories.data,
            title: 'Funko Modificado',
            description: result.message
        });
    } else {
        errorGetting(res);
    }
};
const deleteProduct = async (req, res) => {
    const id = req.params.id;

    await productService.deleteProduct(id);
    res.redirect('/admin');
};
const loginView = async (req, res) => {
    const categories = await categoryService.getCategories();
    res.render('auth/login', {  
        view: {
            title: 'Login | Funkoshop'
        },
        categories:categories.data
    });
};
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