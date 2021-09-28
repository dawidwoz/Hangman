import { Controller, Get } from '@nestjs/common';
import { Words } from '@hangman-application/interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('words')
  public getData(): Words {
    return this.appService.getFiveWords();
  }
}
