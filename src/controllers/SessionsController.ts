import { RequestHandler, Response } from 'express';
import AuthenticateUserService from '../services/sessions/AuthenticateUserService';

import { userViews } from '../views';

class SessionsController {
  create: RequestHandler = async (request, response): Promise<Response> => {
    const { email, password } = request.body;

    const { user, token } = await AuthenticateUserService.execute({
      email,
      password,
    });

    return response.json({ user: userViews.renderOne(user), token });
  };
}

export default SessionsController;
