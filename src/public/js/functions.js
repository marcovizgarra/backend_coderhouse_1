export const eliminarProducto = (array, id) => {
    array.filter(object => object.id !== id);
};