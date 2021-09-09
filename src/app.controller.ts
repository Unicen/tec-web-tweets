import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello('');
  }

  @Get('nacho')
  getNacho(): string {
    return this.appService.getHello('Nacho');
  }

  @Get('manu')
  getManu(): string {
    return this.appService.getHello('Manu');
  }
}
