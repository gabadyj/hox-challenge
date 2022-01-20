import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProduct1642295108760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'manufacturingDate',
            type: 'date',
          },
          {
            name: 'perishable',
            type: 'boolean',
          },
          {
            name: 'expirationDate',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'decimal',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
