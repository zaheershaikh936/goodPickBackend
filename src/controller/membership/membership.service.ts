import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto, UpdateMembershipDto } from './dto/membership.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from 'src/entities';
import { Repository } from 'typeorm';
import { paginate } from 'src/middleware';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private membershipRepo: Repository<Membership>,
  ) {}

  async create(createMembershipDto: CreateMembershipDto) {
    return await this.membershipRepo.save(createMembershipDto);
  }

  async findAll(page: number, limit: number) {
    const { skip, take } = paginate(page, limit);
    return await this.membershipRepo
      .createQueryBuilder('membership')
      .select([
        'membership.id',
        'membership.name',
        'membership.price',
        'membership.valid',
        'membership.logo',
        'membership.tag',
        'membership.description',
        'membership.base',
        'membership.benefits',
        'membership.button',
      ])
      .where(`membership.isActive = ${true}`)
      .take(take)
      .skip(skip)
      .getMany();
  }

  async findOne(id: string) {
    const membership = await this.membershipRepo
      .createQueryBuilder('membership')
      .where('membership.id = :id', { id })
      .andWhere('membership.isActive = :isActive', { isActive: true })
      .getOne();

    if (!membership) {
      throw new NotFoundException('Membership not found or inactive');
    }
    return membership;
  }

  async update(id: string, updateMembershipDto: UpdateMembershipDto) {
    return await this.membershipRepo
      .createQueryBuilder()
      .update(Membership)
      .set(updateMembershipDto)
      .where('id = :id', { id: id })
      .execute();
  }

  async remove(id: string) {
    return await this.membershipRepo.delete({ id: id });
  }
}
