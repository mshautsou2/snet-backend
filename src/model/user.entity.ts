import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @Column('varchar', { length: 256 })
  username: string;

  @Column('varchar', { length: 256 })
  email: string;

  @Column('varchar', { length: 256 })
  password: string;
}
