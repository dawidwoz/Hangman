import { Injectable } from '@nestjs/common';
import { Words } from '@hangman-application/api-interfaces';
import fakeResponse from './answers.json';

@Injectable()
export class AppService {
  getFiveWords(): Words {
    const allWords = { words: fakeResponse };
    const chosenWords = [];
    for (let i = 0; i < 5; i++) {
      chosenWords.push(
        allWords.words[Math.floor(Math.random() * allWords.words.length)]
      );
    }
    return { words: chosenWords };
  }
}
