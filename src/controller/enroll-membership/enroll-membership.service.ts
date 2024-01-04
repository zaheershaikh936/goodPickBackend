import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// !other import
import { CreateEnrollMembershipDto } from './dto/enroll-membership.dto';
import { EnrollMembership } from 'src/entities';
import { UserService } from '../user/user.service';
import { MembershipService } from '../membership/membership.service';

@Injectable()
export class EnrollMembershipService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private UserServiceInject: UserService,
    @Inject(forwardRef(() => MembershipService))
    private MembershipServiceInject: MembershipService,
    @InjectRepository(EnrollMembership)
    private enrollMembershipRepo: Repository<EnrollMembership>,
  ) {}

  async create(createEnrollMembershipDto: CreateEnrollMembershipDto) {
    const { userId, membershipId } = createEnrollMembershipDto;
    const user = await this.UserServiceInject.findOne(userId);
    const membership = await this.MembershipServiceInject.findOne(membershipId);
    createEnrollMembershipDto.membership = membership;
    createEnrollMembershipDto.user = user;
    return await this.enrollMembershipRepo.save(createEnrollMembershipDto);
  }

  async findAll(id: string) {
    return await this.enrollMembershipRepo.find({
      where: { id: id },
      relations: ['user', 'membership'],
    });
  }
}
