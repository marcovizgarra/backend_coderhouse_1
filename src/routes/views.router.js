import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {})
});

router.get('views/home', (request, response) => {
    response.render('home', {})
});

router.get('views/real-time-products', (request, response) => {
    response.render('realtimeProducts', {})
});

export default router;