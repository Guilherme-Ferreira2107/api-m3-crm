import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CoreModule } from './modules/index.module';
import { HttpExceptionFilter } from './shared/exceptions';
import { TransformInterceptor } from './shared/interceptors';

import { config } from 'dotenv';
config();

const TypoOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
  migrations: [__dirname + '/database/migrations/*.{ts,js}'],
  migrationsRun: true,
});

console.log('process.env.DB_PASSWORD: ', process.env.DB_PASSWORD);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypoOrmModule,
    CoreModule,
  ],
  //controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
