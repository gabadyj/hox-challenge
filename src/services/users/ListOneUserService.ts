import { getRepository } from 'typeorm';

import User from '../../models/User';

class ListOneUserService {
  static execute = async (id: string): Promise<User> => {
    const usersRepository = getRepository(User);

    return usersRepository.findOneOrFail(id);
  };
}

export default ListOneUserService;
