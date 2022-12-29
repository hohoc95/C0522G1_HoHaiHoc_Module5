import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'one', mean: 'một'},
    {word: 'two', mean: 'hai'},
    {word: 'three', mean: 'ba'},
    {word: 'four', mean: 'bốn'},
    {word: 'five', mean: 'năm'},
    {word: 'six', mean: 'sáu'},
    {word: 'seven', mean: 'bảy'},
    {word: 'eight', mean: 'tám'},
    {word: 'nine', mean: 'chín'},
    {word: 'do you drop any beats :))', mean: 'em có đánh rơi nhịp nào không :v'}
  ];

  constructor() {
  }

  findAll() {
    return this.words;
  }

  findByWord(word: string) {
    return this.words.find(item => item.word === word);
  }
}
