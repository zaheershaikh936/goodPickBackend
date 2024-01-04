import { Column, Entity, JoinColumn, ManyToMany } from 'typeorm';

// !other import
import { User, Membership } from './index';

export const status = ['In Process', 'Paid', 'Canceled', 'Expired'];

@Entity()
export class EnrollMembership {
  @Column({ primary: true, generated: 'uuid', nullable: false })
  id: string;

  @ManyToMany(() => Membership, (membership) => membership.id)
  @JoinColumn({ name: 'id' })
  membership: Membership;

  @ManyToMany(() => User, (user) => user.id)
  @JoinColumn({ name: 'id' })
  user: User;

  @Column({
    type: 'text',
    nullable: false,
    enum: ['In Process', 'Paid', 'Canceled', 'Expired'],
  })
  status: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  isActive: boolean;

  @Column({ type: 'timestamp', nullable: true })
  purchase: Date;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  expired: Date;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  created: Date;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  updated: Date;
}
