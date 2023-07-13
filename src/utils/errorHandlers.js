export const notFoundPage = (req, res) => {
    res.status(404).render('message', {
        view: {
            title: '404 | Funkoshop'
        },
        title: 'Error 404',
        description: 'Página no encontrada.' 
    });
}
export const errorGetting = (res) => {
    res.status(503).render('message', {
        view: {
            title: '503 | Funkoshop'
        },
        title: 'Error 503',
        description: 'Hubo un error inesperado, intente más tarde.' 
    });
}
export const errorNotExist = (res) => {
    res.status(400).render('message', {
        view: {
            title: '400 | Funkoshop'
        },
        title: 'Error 400',
        description: 'El producto con el ID seleccionado no existe o fue eliminado.' 
    });
}