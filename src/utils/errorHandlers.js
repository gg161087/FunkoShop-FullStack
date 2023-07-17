import categoryService from '../services/categoryService.js'

export const notFoundPage = async (req, res) => {
    const categories = await categoryService.getCategories();
    res.status(404).render('message', {
        view: {
            title: '404 | Funkoshop'
        },
        categories: categories.data,
        title: 'Error 404',
        description: 'Página no encontrada.' 
    });
}
export const errorGetting = async (res) => {
    const categories = await categoryService.getCategories();
    res.status(503).render('message', {
        view: {
            title: '503 | Funkoshop'
        },
        categories: categories.data,
        title: 'Error 503',
        description: 'Hubo un error inesperado, intente más tarde.' 
    });
}
export const errorNotExist = async (res) => {
    const categories = await categoryService.getCategories();
    res.status(400).render('message', {
        view: {
            title: '400 | Funkoshop'
        },
        categories: categories.data,
        title: 'Error 400',
        description: 'El producto con el ID seleccionado no existe o fue eliminado.' 
    });
}