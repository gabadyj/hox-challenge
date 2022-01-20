import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { passwordHelper } from '../../helpers';

import authConfig from '../../config/auth';

import User from '../../models/User';
import AppError from '../../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  static execute = async ({
    email,
    password,
  }: IRequest): Promise<IResponse> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'createdAt'],
    });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 400);
    }

    const passwordMatched = await passwordHelper.compareHash(
      user.password,
      password,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 400);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  };
}

export default AuthenticateUserService;
