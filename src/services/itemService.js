import itemModel from '../models/itemModel.js';

const getAllItems = async () => {
    return await itemModel.getAll();
}

const getItem = async (id) => {
    return await itemModel.getOne({ product_id: id });
}

const createItem = async (item) => {
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/imagen_front',
        image_back: '/imagen_front',
        licence_id: item.collection,
        category_id: item.category
    }
    return await itemModel.create([Object.values(itemSchema)]);
}

const editItem = async (item, id) => {
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/imagen_front',
        image_back: '/imagen_front',
        licence_id: item.collection,
        category_id: item.category
    }
    return await itemModel.edit(itemSchema, { product_id: id });
}

const deleteItem = async (id) => {
    return await itemModel.deleteOne({ product_id: id });
}

export default {
    getAllItems,
    getItem,
    createItem,
    editItem,
    deleteItem
}