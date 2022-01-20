import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Product from '../../models/Product';

interface IRequest {
  name: string;
  manufacturingDate: Date;
  perishable: boolean;
  expirationDate: Date | string;
  price: number;
}

class CreateProductService {
  static execute = async ({
    name,
    manufacturingDate,
    perishable,
    expirationDate,
    price,
  }: IRequest): Promise<Product> => {
    const productsRepository = getRepository(Product);

    if (!price) {
      throw new AppError('Price is required', 400);
    }

    if (perishable === true && !expirationDate) {
      throw new AppError('Expiration date is required', 400);
    }

    if (perishable === true && expirationDate) {
      if (manufacturingDate >= expirationDate) {
        throw new AppError(
          'The manufacturing date cannot be greater than or equal to the expiration date',
          400,
        );
      } else {
        const product = productsRepository.create({
          name,
          manufacturingDate,
          perishable,
          expirationDate,
          price,
        });

        await productsRepository.save(product);

        return product;
      }
    }

    const product = productsRepository.create({
      name,
      manufacturingDate,
      perishable,
      price,
    });

    await productsRepository.save(product);

    return product;
  };
}

export default CreateProductService;
