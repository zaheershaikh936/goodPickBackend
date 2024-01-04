import { IsNotEmpty, IsString } from 'class-validator';
import { Membership, User } from 'src/entities';

export class CreateEnrollMembershipDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  membershipId: string;

  status: string;

  user: User;

  membership: Membership;
}
