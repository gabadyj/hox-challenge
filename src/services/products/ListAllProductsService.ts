import { getRepository } from 'typeorm';

import Product from '../../models/Product';

interface IRequest {
  page: number;
  sortField: any;
  sortOrder: any;
}

class ListAllProductsService {
  static execute = async ({
    page,
    sortOrder,
    sortField,
  }: IRequest): Promise<Product[]> => {
    const productsRepository = getRepository(Product);

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
      const products = await productsRepository.find({
        order: {
          [sortField]:
            sortOrder === 'desc' || sortOrder === 'DESC' ? 'DESC' : 'ASC',
        },
        skip: offset,
        take: limit,
      });

      return products;
    } else {
      const products = await productsRepository.find({
        skip: offset,
        take: limit,
      });

      return products;
    }
  };
}

export default ListAllProductsService;
