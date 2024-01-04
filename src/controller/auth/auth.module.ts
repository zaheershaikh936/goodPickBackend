import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';
import { APP_GUARD } from '@nestjs/core';

// !other import
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../index';
import { AuthGuard } from 'src/middleware/authGuard';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_JWT,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
