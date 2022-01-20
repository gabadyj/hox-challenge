import { RequestHandler, Response } from 'express';
import {
  CreateProductService,
  ListAllProductsService,
  ListOneProductService,
  DeleteProductService,
  UpdateProductService,
} from '../services/products';

import { productViews } from '../views';

class ProductsController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const { sortField, sortOrder, page } = request.query;

    const products = await ListAllProductsService.execute({
      sortField,
      sortOrder,
      page: Number(page),
    });

    return response.status(200).json(productViews.renderMany(products));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    const product = await ListOneProductService.execute(id);

    return response.status(200).json(productViews.renderOne(product));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, manufacturingDate, perishable, expirationDate, price } =
      request.body;

    const product = await CreateProductService.execute({
      name,
      manufacturingDate,
      perishable,
      expirationDate,
      price,
    });

    return response.status(200).json(productViews.renderOne(product));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, manufacturingDate, perishable, expirationDate, price } =
      request.body;

    const product = await UpdateProductService.execute({
      id,
      name,
      manufacturingDate,
      perishable,
      expirationDate,
      price,
    });

    return response.status(200).json(productViews.renderOne(product));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteProductService.execute(id);

    return response.status(204).send();
  };
}

export default ProductsController;
