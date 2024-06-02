import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('user_settings')
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field((type) => Boolean, { nullable: true })
  show?: boolean;

  @Column()
  @Field((type) => Boolean)
  isActive: boolean;
}
