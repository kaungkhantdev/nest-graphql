import { Resolver, Query } from '@nestjs/graphql';
import { AppHelloOutput } from './app.output';

@Resolver()
export class AppResolver {
  @Query(() => AppHelloOutput)
  sayHello(): AppHelloOutput {
    return { message: 'Hello World!' };
  }
}
