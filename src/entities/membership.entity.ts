import { Column, Entity, Index } from 'typeorm';

export const tagEnum = ['Free', 'Pro'];

@Entity()
export class Membership {
  @Column({ primary: true, generated: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @Column({ type: 'integer', nullable: false, default: 30 })
  valid: number;

  @Column({ type: 'text', nullable: false })
  logo: string;

  @Column({
    type: 'text',
    nullable: false,
    default: 'Pro',
    enum: tagEnum,
  })
  tag: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'text', nullable: false })
  base: string;

  @Column({ type: 'text', array: true, nullable: false })
  benefits: string[];

  @Column({ type: 'text', nullable: false })
  button: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  @Index()
  isActive: boolean;

  @Column({ type: 'boolean', nullable: false, default: false })
  isDeleted: boolean;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  created: Date;

  @Column({ type: 'timestamp', nullable: false, default: new Date() })
  updated: Date;
}
