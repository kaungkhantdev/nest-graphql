import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSetting {
  @Field((type) => Int)
  userId: number;

  @Field((type) => Boolean, { nullable: true })
  show?: boolean;

  @Field((type) => Boolean)
  isActive: boolean;
}
