import { Router } from 'express';
import { GetAllProductsController } from './controllers/GetAllProductsController';

const router = Router();

//Product Routes

router.get('/products', new GetAllProductsController().handle);

//TODO add other routes

export { router }