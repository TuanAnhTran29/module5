import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryserviceService {

  dictionary: Iword[]= [
    {
      word: 'bird',
      mean: 'con chim'
    },
    {
      word: 'adherence',
      mean: 'tuan thu'
    },
    {
      word: 'perspective',
      mean: 'goc nhin'
    },
    {
      word: 'fluid',
      mean: 'thay doi theo thoi gian'
    },
    {
      word: 'take place',
      mean: 'dien ra'
    }
  ]

  constructor() { }

  translate(word: any){
    return this.dictionary.find(mean => mean.word == word);
  }
}
