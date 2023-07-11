import licenceService from '../services/licenceService.js';

const homeView = async (req, res) => {
    const licences = await licenceService.getAllItemsLicences();
    res.render('home', {
        view: {
            title: "Home | Funkoshop"
        },
        collections: licences.data
    });
};
const contactView = (req, res) => res.send('Contact View Route');
const aboutView = (req, res) => res.send('About View Route');
const faqsView = (req, res) => res.send('FAQs View Route');

export default {
    homeView,
    contactView,
    aboutView,
    faqsView
};