import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5455,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/**/*.migration{.ts,.js}'],
  subscribers: [__dirname + '/**/*.subscriber{.ts,.js}'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
};
