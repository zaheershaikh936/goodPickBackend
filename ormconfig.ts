import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//! Other Import
import 'dotenv/config';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
  // migrations: ['src/migrations/*{.ts,.js}'],
  // migrationsRun: false,
};

export default config;
