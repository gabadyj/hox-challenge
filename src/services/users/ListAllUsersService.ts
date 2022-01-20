import { getRepository } from 'typeorm';
import User from '../../models/User';

interface IRequest {
  page: number;
  sortField: any;
  sortOrder: any;
}

class ListUsersService {
  static execute = async ({
    page,
    sortField,
    sortOrder,
  }: IRequest): Promise<User[]> => {
    const usersRepository = getRepository(User);

    let limit;

    if (!limit) {
      limit = 10;
    }

    if (page) {
      limit = 10;
    }

    let offset = page * 10 - 10;

    if (offset < 0) {
      offset = 0;
    }

    if (sortField) {
      const users = await usersRepository.find({
        order: {
          [sortField]:
            sortOrder === 'desc' || sortOrder === 'DESC' ? 'DESC' : 'ASC',
        },
        skip: offset,
        take: limit,
      });

      return users;
    } else {
      const users = await usersRepository.find({
        skip: offset,
        take: limit,
      });

      return users;
    }
  };
}

export default ListUsersService;
