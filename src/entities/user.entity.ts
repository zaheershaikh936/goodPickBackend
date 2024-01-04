import { Column, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  lastName: string;

  @Column({ type: 'integer', nullable: true })
  otp: number;

  @Column({ type: 'varchar', nullable: true })
  countryCode: string;

  @Column({ type: 'varchar', nullable: true })
  mobile: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  mobilePriv: boolean;

  @Column({ type: 'text', nullable: true })
  profilePic: string;

  @Column({ type: 'text', nullable: true })
  city: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isVerify: boolean;

  @Column({ type: 'varchar', nullable: true, enum: ['email', 'mobile'] })
  verifyType: string;

  @Column({ type: 'text', nullable: true })
  fcmToken: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isVendor: boolean;

  @Column({ type: 'boolean', nullable: false, default: true })
  isActive: boolean;

  @Column({ type: 'boolean', nullable: false, default: false })
  isDeleted: boolean;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  CreateDateColumn: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false, default: new Date() })
  updated: Date;
}
