import Product from '../models/Product';

export interface IProductView {
  id: string;
  name: string;
  perishable: boolean;
  manufacturingDate: Date | string;
  expirationDate?: Date | null;
  price: number | string;
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const renderOne = (product: Product): IProductView => ({
  id: product.id,
  name: product.name,
  perishable: product.perishable,
  manufacturingDate: product.manufacturingDate,
  expirationDate: product.expirationDate,
  price: priceFormatter.format(product.price),
});

export const renderMany = (products: Product[]): IProductView[] => {
  return products.map(product => renderOne(product));
};
