import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// !other import
import {
  HomeModule,
  UserModule,
  AuthModule,
  MembershipModule,
  VendorModule,
  EnrollMembershipModule,
} from './controller';
import { LoggerMiddleware } from './middleware';
import config from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    HomeModule,
    UserModule,
    AuthModule,
    VendorModule,
    MembershipModule,
    EnrollMembershipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
