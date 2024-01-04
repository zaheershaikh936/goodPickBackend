import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// !other import
import { EnrollMembershipController } from './enroll-membership.controller';
import { EnrollMembershipService } from './enroll-membership.service';
import { EnrollMembership } from 'src/entities';
import { UserModule, MembershipModule } from '../index';

@Module({
  imports: [
    UserModule,
    MembershipModule,
    TypeOrmModule.forFeature([EnrollMembership]),
  ],
  controllers: [EnrollMembershipController],
  providers: [EnrollMembershipService],
})
export class EnrollMembershipModule {}
