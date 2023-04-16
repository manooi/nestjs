import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // specify the database type
  host: 'localhost', // specify the hostname or IP address of your PostgreSQL server
  port: 5455, // specify the port number on which your PostgreSQL server is running
  username: 'postgres', // specify your PostgreSQL username
  password: 'password', // specify your PostgreSQL password
  database: 'postgres', // specify the name of your PostgreSQL database
  synchronize: true, // set to true to automatically synchronize database schema with TypeORM entities during development (use with caution in production)
  logging: true, // set to true to enable logging of database queries and other TypeORM-related messages
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // specify the path to your TypeORM entities
  migrations: [__dirname + '/**/*.migration{.ts,.js}'], // specify the path to your TypeORM migrations
  subscribers: [__dirname + '/**/*.subscriber{.ts,.js}'], // specify the path to your TypeORM subscribers
  migrationsRun : true,
  migrationsTableName: 'migrations',
};


@Module({
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
