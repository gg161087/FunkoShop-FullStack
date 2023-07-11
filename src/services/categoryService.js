import categoryModel from '../models/categoryModel.js';

const getAllItems = async () => {
    return await categoryModel.getAll();
};

export default {
    getAllItems,
};