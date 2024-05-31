import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingInput {
  @Field((type) => Int)
  userId: number;

  @Field((type) => Boolean, { nullable: true, defaultValue: false })
  show: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  isActive: boolean;
}
