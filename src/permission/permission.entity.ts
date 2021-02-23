import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'permission' })
export class Permission extends BaseEntity {
  @Column('varchar', { length: 256 })
  title: string;
}
