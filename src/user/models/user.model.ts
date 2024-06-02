import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './user-setting.model';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => String, {
    description: `Name`,
    deprecationReason: 'Not useful in v2 schema',
  })
  name: string;

  @Column()
  @Field((type) => Int)
  age: number;

  @Column()
  @Field({ nullable: true })
  email: string;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field((type) => UserSetting, { nullable: true })
  setting?: UserSetting;
}
