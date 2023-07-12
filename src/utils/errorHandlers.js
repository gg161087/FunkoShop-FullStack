export const notFoundPage = (req, res) => {
    res.status(404).render('404', {
        view: {
            title: '404 | Funkoshop'
        },
        title: 'Error 404',
        description: 'Página no encontrada.' 
    });
}