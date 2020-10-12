import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { INestjsService } from '@xura/shared'

@Controller()
export class AppController implements INestjsService {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    return Promise.resolve("");
  }

  @Get()
  helloWorld(message: string): Promise<string> {
    return Promise.resolve(`${Math.random()} Hello World ${message}`);
  }
}
