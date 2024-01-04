import { Controller, Get, Post, Body, Patch, Param, Req } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/vendor.dto';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post()
  create(@Body() createVendorDto: CreateVendorDto, @Req() req: any) {
    const { sub } = req.user;
    return this.vendorService.create(createVendorDto, sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: any) {
    return this.vendorService.update(id, updateVendorDto);
  }
}
