const socket = io();

const eliminarProducto = (array, id) => {
    array.filter(object => object.id !== id);
};

let btnsEliminar = document.querySelectorAll('.eliminarProducto');

btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', () => {
        let productId = btn.id 
        socket.emit('elminarProducto', { id: productId })
    })
});

socket.on('productoEliminado', (data) => {
    let logContainer = document.getElementById('logContainer');
    let p = document.createElement('p');
    let deleteLog = data.itemElminado;
    p.textContent = deleteLog;
    logContainer.appendChild(p);

})