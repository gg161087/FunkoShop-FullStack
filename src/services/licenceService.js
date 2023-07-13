import licenceModel from '../models/licenceModel.js';

const getLicences = async () => {
    return await licenceModel.getAll();
}

export default {
    getLicences,
};
