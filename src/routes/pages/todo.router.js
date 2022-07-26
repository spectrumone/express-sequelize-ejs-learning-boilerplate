import { Router } from 'express';
import TodoController from '../../controllers/todo.controller';

const todoRouter = new Router();

todoRouter.get('/', TodoController.list);

export default todoRouter;
