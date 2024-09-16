import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

export const AppDataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + 'src/**/*.entity.{ts,js}'],
  migrations: [__dirname + 'src/database/migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
};

export default new DataSource(AppDataSource);
