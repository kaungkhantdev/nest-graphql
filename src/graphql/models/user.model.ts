import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './user-setting.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => String, {
    description: `Name`,
    deprecationReason: 'Not useful in v2 schema',
  })
  name: string;

  @Field((type) => Int)
  age: number;

  @Field({ nullable: true })
  email: string;

  @Field((type) => UserSetting, { nullable: true })
  setting: UserSetting;
}
