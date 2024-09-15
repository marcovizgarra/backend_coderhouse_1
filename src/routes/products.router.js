import { Router } from 'express';
import fs from 'fs';
import products from '../json/products.json' assert { type: "json" };

const router = Router();

router.get('/', (request, response) => {
    response.send(products)
})

router.post('/', (request, response) => {
    let product = request.body;
    let UID = "product-" + Math.floor(Math.random() * 999999);
    
    if (!product) {
        console.log(product.length);
        
        return response.send(({
            status: "Error",
            error: "Debe ingresar datos antes de enviar la solicitud"
        }))
    }

    products.push({
        id: UID,
        status: true,
        ...product        
    });

    fs.writeFile('./json/products.json', JSON.stringify(products, null, 2), (err) => {
        if (err) {
            return response.status(500).send({
                status: "Error",
                message: "No se pudo guardar el producto"
            });
        }

        response.send({
            status: "Success",
            message: "Producto cargado exitosamente"
        });
    });
})

router.delete('/', (request, response) => {
    let delId = request.body.id;
    
    let newProductList = [...products];
    
    if (!delId) {
        response.send({
            error: "denied",
            message: "Es necesario que ingrese un ID de producto para elminar"
        })
    }
    
    newProductList = newProductList.filter(element => element.id !== delId)

    fs.writeFile('./json/products.json', JSON.stringify(newProductList, null, 2), (err) => {
        if (err) {
            return response.status(500).send({
                status: "Error",
                message: "No se pudo guardar el producto"
            });
        }

        response.send({
            status: "Success",
            message: "Producto cargado exitosamente"
        });
    });

    response.send(products)
})

export default router;