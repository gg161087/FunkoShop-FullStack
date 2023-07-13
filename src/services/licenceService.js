import licenceModel from '../models/licenceModel.js';

const getLicences = async () => {
    return await licenceModel.getLicences();
}

export default {
    getLicences,
};
