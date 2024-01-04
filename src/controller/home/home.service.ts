import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  findAll() {
    return 'Welcome to Good Pick Backend';
  }
}
