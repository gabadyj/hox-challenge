import { RequestHandler, Response } from 'express';
import {
  ListAllUsersService,
  CreateUserService,
  UpdateUserService,
  DeleteUserService,
  ListOneUserService,
} from '../services/users';

import { userViews } from '../views';

class UsersController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const { sortField, sortOrder, page } = request.query;

    const users = await ListAllUsersService.execute({
      sortField,
      sortOrder,
      page: Number(page),
    });

    return response.status(200).json(userViews.renderMany(users));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    const user = await ListOneUserService.execute(id);

    return response.status(200).json(userViews.renderOne(user));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, email, password } = request.body;

    const user = await CreateUserService.execute({ name, email, password });

    return response.status(200).json(userViews.renderOne(user));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const user = await UpdateUserService.execute({ id, name, email, password });

    return response.status(200).json(userViews.renderOne(user));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteUserService.execute(id);

    return response.status(204).send();
  };
}

export default UsersController;
