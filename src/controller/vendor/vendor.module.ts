import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// !other import
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { Vendor } from 'src/entities';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => UserModule), TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
