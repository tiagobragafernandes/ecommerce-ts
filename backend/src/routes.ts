import { Router } from 'express';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { GetAllProductsController } from './controllers/product/GetAllProductsController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { AddItemToOrderController } from './controllers/order/AddItemToOrderController';
import { RemoveItemFromOrderController } from './controllers/order/RemoveItemFromOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';

const router = Router();

//User Routes

router.post('/user', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

//Product Routes

router.get('/products', new GetAllProductsController().handle);

//Order Routes

router.post('/order/new', isAuthenticated, new CreateOrderController().handle);

router.post('/order/item', isAuthenticated, new AddItemToOrderController().handle);

router.delete('/order/item', isAuthenticated, new RemoveItemFromOrderController().handle);

router.get('/order', isAuthenticated, new ListOrderController().handle);

export { router }