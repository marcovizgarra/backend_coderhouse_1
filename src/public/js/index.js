const socket = io();
import { eliminarProducto } from "./functions";

let btnsEliminar = document.querySelectorAll('.eliminarProducto');

btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.id)
        eliminarProducto(productos, btn.id)
        // socket.emit('eliminarProducto')
    })
});