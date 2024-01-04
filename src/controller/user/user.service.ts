import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// !other import
import { CreateUserDto } from './dto/user.dto';
import { User } from 'src/entities';
import { generateOtp } from '../../middleware/otpGenerate';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.otp = generateOtp();
    return this.userRepo.save(createUserDto);
  }

  async isExist(email: string) {
    return await this.userRepo
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.otp'])
      .where('user.email = :email', { email })
      .getOne();
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return await this.userRepo.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
