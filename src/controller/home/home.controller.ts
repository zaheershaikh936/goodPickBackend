import { Controller, Get } from '@nestjs/common';

// !other import
import { HomeService } from './home.service';
import { Public } from 'src/middleware/publicAccess';

@Controller('/')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Public()
  @Get()
  findAll() {
    return this.homeService.findAll();
  }
}
