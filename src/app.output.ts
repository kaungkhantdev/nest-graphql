import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AppHelloOutput {
  @Field()
  message: string;
}
