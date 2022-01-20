import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  manufacturingDate: Date;

  @Column()
  perishable: boolean;

  @Column({ type: 'varchar' })
  expirationDate?: Date | null;

  @Column('decimal', { precision: 3, scale: 2 })
  price: number;
}

export default Product;
