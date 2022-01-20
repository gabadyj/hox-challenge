import { getRepository } from 'typeorm';

import User from '../../models/User';

class DeleteUserService {
  static execute = async (id: string): Promise<void> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id);

    await usersRepository.delete({ id: user.id });
  };
}

export default DeleteUserService;
