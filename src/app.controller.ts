import { Controller, Get, Ip, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(@Req() request: Request, @Ip() IpAddress: any): string {
    console.log(request, IpAddress);
    return 'hello';
  }
}
