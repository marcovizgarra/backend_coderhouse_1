import { Router } from 'express';
import fs from 'fs';
import products from '../json/products.json' assert { type: "json" };
import cart from '../json/cart.json' assert { type: "json" };

const router = Router();

router.get('/', (request, response) => {
    let UID = 'cart-' + Math.floor(Math.random() * 999999)
    
    if (products.length == 0) {
        response.send({
            status: "denied",
            message: "No hay productos para agregar al carrito"
        })
    }

    const newCart = [{
        id: UID,
        products: [{...products}]
    }]

    fs.writeFile('./json/cart.json', JSON.stringify(newCart, null, 2), (err) => {
        if (err) {
            return response.status(500).send({
                status: "Error",
                message: "No se pudo guardar el producto"
            });
        }

        response.send({
            status: "Success",
            message: "Carrito creado exitosamente"
        });
    });

    response.send(newCart)
})

export default router;