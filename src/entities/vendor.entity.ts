import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

// !other import
import { User } from './index';

export const preferredWorkingDaysEnum = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

@Entity()
export class Vendor {
  @Column({ primary: true, generated: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isBlocked: boolean;

  @Column({
    type: 'text',
    array: true,
    nullable: false,
  })
  preferredWorkingDays: string[];

  @Column({ type: 'text', nullable: false })
  carType: string;

  @Column({ type: 'text', array: true, nullable: false })
  images: string[];

  @Column({ type: 'text', array: true, nullable: false })
  languageProficiency: string[];

  @Column({ type: 'text', nullable: false })
  license: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isActive: boolean;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'id' })
  user: User;

  @Column({ type: 'boolean', nullable: false, default: false })
  register: boolean;

  @Column('jsonb', { nullable: true })
  logs: any[];

  @CreateDateColumn({ type: 'timestamp', nullable: false, default: new Date() })
  created: Date;
}
