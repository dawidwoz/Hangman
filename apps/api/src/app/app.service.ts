import { Injectable } from '@nestjs/common';
import { Words } from '@hangman-application/interfaces';
import fakeResponse from './answers.json';

@Injectable()
export class AppService {
  public getFiveWords(): Words {
    const allWords = { words: fakeResponse };
    const chosenWords = [];
    while (chosenWords.length < 5) {
      const word =
        allWords.words[Math.floor(Math.random() * allWords.words.length)];
      chosenWords.indexOf(word) === -1
        ? chosenWords.push(word.toLowerCase())
        : null;
    }
    return { words: chosenWords } as Words;
  }
}
