import categoryService from '../services/categoryService.js'

export const notFoundPage = async (req, res) => {
    const categories = await categoryService.getCategories();
    res.status(404).render('message', {
        view: {
            title: '404 | Funkoshop'
        },
        categories: categories.data,
        title: 'Error 404',
        description: 'Página no encontrada.',
        href: {
            route: '/',
            text: 'HOME'
        } 
    });
}

export const message = async (res, nError, viewTitle, title, description, route, text) => {
    const categories = await categoryService.getCategories();
    res.status(nError).render('message', {
        view: {
            title: viewTitle
        },
        categories: categories.data,
        title,
        description,
        href: {
            route,
            text
        } 
    });
}