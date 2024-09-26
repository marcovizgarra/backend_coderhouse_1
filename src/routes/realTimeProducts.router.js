import { Router } from "express";
import products from '../json/products.json' with { type: "json" };

const realTimeProductsRouter = Router();

realTimeProductsRouter.get('/', (request, response) => {
    response.render('realTimeProducts', {products});
});

export default realTimeProductsRouter