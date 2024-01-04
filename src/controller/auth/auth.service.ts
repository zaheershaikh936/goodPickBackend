import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';

// !other import
import { SignUpAuthDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

type payloadT = {
  sub: string;
  roleId: string;
};

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private UserServiceInject: UserService,
    private JwtServiceService: JwtService,
  ) {}

  async signIn(authBody: SignUpAuthDto) {
    const { email, otp } = authBody;
    const user = await this.UserServiceInject.isExist(email);
    if (!user) {
      throw new UnauthorizedException({
        message: `email is in correct. Please check the email Id ${email} `,
      });
    } else if (user.otp !== otp) {
      throw new UnauthorizedException({
        message: `otp is in correct. Please check your otp`,
      });
    }

    const payload: payloadT = { sub: user.id, roleId: 'user' };
    const token = await this.tokenGenerate(payload);

    return {
      token,
      data: { _id: user.id, email: user.email },
    };
  }

  async tokenGenerate(payload: payloadT) {
    return {
      refresh_token: await this.JwtServiceService.signAsync(payload, {
        expiresIn: '6d',
      }),
      access_token: await this.JwtServiceService.signAsync(payload, {
        expiresIn: '12h',
      }),
    };
  }
}
