import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5455,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [__dirname + '/**/*.migration{.ts,.js}'],
  // subscribers: [__dirname + '/**/*.subscriber{.ts,.js}'],
  // migrationsRun: true,
  // migrationsTableName: 'migrations'
};


@Module({
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
