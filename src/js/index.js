const socket = io();

// socket.on('eliminarProducto', (data) => {

// })

let btnsEliminar = document.querySelectorAll('.eliminarProducto');

btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('Presionaste eliminar');
    })
});