import productModel from '../models/productModel.js';

const getProducts = async () => {
    return await productModel.getProducts();
}

const getProductsByLicence = async (licence_id) => {
    return await productModel.getProductsByLicence(licence_id);
}

const getProduct = async (id) => {
    return await productModel.getProduct({ product_id: id });
}

const createProduct = async (item) => {
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/imagen_front',
        image_back: '/imagen_back',
        licence_id: item.collection,
        category_id: item.category
    }
    return await productModel.createProduct([Object.values(itemSchema)]);
}

const editProduct = async (item, id) => {
    const productScheme = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/imagen_front',
        image_back: '/imagen_back',
        licence_id: item.collection,
        category_id: item.category
    }
    return await productModel.editProduct(productScheme, { product_id: id });
}

const deleteProduct = async (id) => {
    return await productModel.deleteProduct({ product_id: id });
}

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}