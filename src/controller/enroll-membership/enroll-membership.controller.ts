import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EnrollMembershipService } from './enroll-membership.service';
import { CreateEnrollMembershipDto } from './dto/enroll-membership.dto';

@Controller('enrollMembership')
export class EnrollMembershipController {
  constructor(
    private readonly enrollMembershipService: EnrollMembershipService,
  ) {}

  @Post()
  create(@Body() createEnrollMembershipDto: CreateEnrollMembershipDto) {
    return this.enrollMembershipService.create(createEnrollMembershipDto);
  }

  @Get('/:id')
  findAll(@Param('id') id: string) {
    return this.enrollMembershipService.findAll(id);
  }
}
