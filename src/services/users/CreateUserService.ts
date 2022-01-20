import { getRepository } from 'typeorm';

import User from '../../models/User';
import AppError from '../../errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  static execute = async ({
    name,
    email,
    password,
  }: IRequest): Promise<User> => {
    const usersRepository = getRepository(User);

    const checkEmail = await usersRepository.findOne({ where: { email } });

    if (checkEmail) {
      throw new AppError('Email address already used');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  };
}

export default CreateUserService;
