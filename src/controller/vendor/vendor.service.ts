import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateVendorDto, UpdateVendorDto } from './dto/vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// !other import
import { Vendor } from 'src/entities';
import { UserService } from '../user/user.service';

@Injectable()
export class VendorService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private UserServiceInject: UserService,
    @InjectRepository(Vendor)
    private vendorRepo: Repository<Vendor>,
  ) {}

  async create(createVendorDto: CreateVendorDto, id: string) {
    const user = await this.UserServiceInject.findOne(id);
    createVendorDto.userId = user;
    return await this.vendorRepo.save(createVendorDto);
  }

  async findOne(id: string) {
    const user = await this.UserServiceInject.findOne(id);
    // const vendor = await this.vendorRepo.findOneBy({ user: { id: id } });
    return { user };
  }

  async update(id: string, updateVendorDto: UpdateVendorDto) {
    return await this.vendorRepo
      .createQueryBuilder()
      .update(Vendor)
      .set(updateVendorDto)
      .where('id = :id', { id: id })
      .execute();
  }
}
