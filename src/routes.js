import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'


import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';



const routes = new Router();


const uploads = multer(multerConfig)

routes.post('/users', UserController.store); //Cadastro de usuario

routes.post('/sessions', SessionController.store); //Login de usuario

routes.use(authMiddleware); //Autenticação de usuario, será chamado em todas as rotas abaixo

routes.post('/products', uploads.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', uploads.single('file'), ProductController.update);

routes.post('/categories', uploads.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', uploads.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);




export default routes; 
