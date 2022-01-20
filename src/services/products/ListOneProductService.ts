import { getRepository } from 'typeorm';

import Product from '../../models/Product';

class ListOneProductService {
  static execute = async (id: string): Promise<Product> => {
    const productsRepository = getRepository(Product);

    return productsRepository.findOneOrFail(id);
  };
}

export default ListOneProductService;
