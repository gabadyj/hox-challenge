import { getRepository } from 'typeorm';

import Product from '../../models/Product';

class DeleteUserService {
  static execute = async (id: string): Promise<void> => {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOneOrFail(id);

    await productsRepository.delete({ id: product.id });
  };
}

export default DeleteUserService;
