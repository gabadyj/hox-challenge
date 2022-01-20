import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Product from '../../models/Product';

interface IRequest {
  id: string;
  name?: string;
  manufacturingDate?: Date;
  perishable?: boolean;
  expirationDate?: Date;
  price?: number;
}

class UpdateUserService {
  static execute = async ({
    id,
    name,
    manufacturingDate,
    perishable,
    expirationDate,
    price,
  }: IRequest): Promise<Product> => {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOneOrFail(id);

    product.name = name ?? product.name;
    product.manufacturingDate = manufacturingDate ?? product.manufacturingDate;
    product.perishable = perishable ?? product.perishable;
    product.expirationDate = expirationDate ?? product.expirationDate;
    product.price = price ?? product.price;

    if (!perishable) {
      product.expirationDate = null;
    }

    if (perishable === true && !expirationDate) {
      throw new AppError('Expiration date is required');
    }

    if (manufacturingDate && expirationDate) {
      if (perishable === true && manufacturingDate >= expirationDate) {
        throw new AppError(
          'The manufacturing date cannot be greater than or equal to the expiration date',
        );
      }
    }

    await productsRepository.save(product);

    return product;
  };
}

export default UpdateUserService;
