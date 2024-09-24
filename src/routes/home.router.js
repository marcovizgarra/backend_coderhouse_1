import { Router } from 'express';
import products from '../json/products.json'  assert { type: "json" };

const homeRouter = Router();

homeRouter.get('/', (request, response) => {
    response.render('home', {products})
})

export default homeRouter;