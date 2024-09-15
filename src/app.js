import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();

import productRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';

app.listen(8080, () => {
    console.log("Listening on port 8080");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join(__dirname, '/public');
app.use('/static/', express.static(path.join(publicPath)));