import { Router } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {})
});

router.get('views/home', (request, response) => {
    response.render('home', {})
});

export default router;