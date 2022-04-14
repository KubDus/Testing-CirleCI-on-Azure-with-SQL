import { Router } from 'express';
import { userController } from '../controllers/userController';

const UserRouter = Router()

UserRouter.get('/router', userController.browse);

UserRouter.get('/users', userController.getUsers);

UserRouter.get('/create', userController.createUser);

export default UserRouter;