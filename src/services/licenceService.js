import licenceModel from '../models/licenceModel.js';

const getAllItems = async () => {
    return await licenceModel.getAll();
}

export default {
    getAllItems,
};
