import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Membership])],
  controllers: [MembershipController],
  providers: [MembershipService],
  exports: [MembershipService],
})
export class MembershipModule {}
