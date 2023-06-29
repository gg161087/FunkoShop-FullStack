const btnObtenerProductos = document.getElementById('btn-obtener-productos');
const tabla = document.getElementById('tabla-datos');

btnObtenerProductos.addEventListener('click', () => {
    fetch('/api/productos')
        .then(response => response.json())
        .then(datos => {
          
            datos.forEach(dato => {
                const fila = document.createElement('tr');
                const idColumna = document.createElement('td');
                const nombreColumna = document.createElement('td');
                const descripcionColumna = document.createElement('td');
                const precioColumna = document.createElement('td');
                const stockColumna = document.createElement('td');
                const imagenColumna = document.createElement('td');
    
                idColumna.textContent = dato.id;
                nombreColumna.textContent = dato.nombre;
                descripcionColumna.textContent = dato.descripcion;
                precioColumna.textContent = dato.precio;
                stockColumna.textContent = dato.stock;
                imagenColumna.textContent = dato.imagen;
    
                fila.appendChild(idColumna);
                fila.appendChild(nombreColumna);
                fila.appendChild(descripcionColumna);
                fila.appendChild(precioColumna);
                fila.appendChild(stockColumna);
                fila.appendChild(imagenColumna);
    
                tabla.appendChild(fila);
            });
        })
        .catch(error => {
          console.error('Error al obtener los productos:', error);
    });
});