import { Server } from 'socket.io'
import path from 'path'
import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js';

const app = express();
const httpServer = app.listen(8080, () => {
    console.log("Listening on port 8080");
})

app.use('/', viewsRouter)

// Iniciando socket dentro del servidor HTTP
const io = new Server(httpServer);

// Configurando motor de planillas de handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

import productRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

// Declarar carpeta public como directorio de archivos estáticos
const publicPath = path.join(__dirname, '/public');
app.use('/static/', express.static(path.join(publicPath)));