import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {})
});

router.get('/home', (request, response) => {
    response.render('layouts/home', {})
});

export default router;