import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getFiveWords', () => {
    it('should return 5 words', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData().words).toHaveLength(5);
    });
  });
});
