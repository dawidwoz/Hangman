import { Controller, Get } from '@nestjs/common';

import { Words } from '@hangman-application/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('words')
  getData(): Words {
    return this.appService.getFiveWords();
  }
}
