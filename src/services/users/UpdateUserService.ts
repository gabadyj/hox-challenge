import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import User from '../../models/User';

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  static execute = async ({
    id,
    name,
    email,
    password,
  }: IRequest): Promise<User> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id);

    const checkEmail = await usersRepository.findOne({ where: { email } });

    if (checkEmail) {
      throw new AppError('Email address already used');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.password = password ?? user.password;

    await usersRepository.save(user);

    return user;
  };
}

export default UpdateUserService;
