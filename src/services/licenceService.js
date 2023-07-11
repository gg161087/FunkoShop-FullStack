import licenceModel from '../models/licenceModel.js';

const getAllItemsLicences = async () => {
    return await licenceModel.getAll();
}

export default {
    getAllItemsLicences,
}