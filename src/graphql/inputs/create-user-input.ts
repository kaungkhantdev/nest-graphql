import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((type) => String)
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field((type) => Int)
  age: number;
}
