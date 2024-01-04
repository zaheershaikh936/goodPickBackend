import { Controller, Post, Body } from '@nestjs/common';

// !other import
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/auth.dto';
import { Public } from 'src/middleware/publicAccess';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  signIn(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signIn(createAuthDto);
  }
}
