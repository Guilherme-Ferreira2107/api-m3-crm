import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1726518587416 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE users (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                password varchar(256) NOT NULL, 
                email varchar(256) NOT NULL,
                created_at varchar(256) NOT NULL,
                updated_at varchar(256) NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
  }
}
