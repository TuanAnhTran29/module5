import { Component, OnInit } from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryserviceService} from "../../service/dictionaryservice.service";

@Component({
  selector: 'app-dictionarypage',
  templateUrl: './dictionarypage.component.html',
  styleUrls: ['./dictionarypage.component.css']
})
export class DictionarypageComponent implements OnInit {

  dictionary: Iword[]= []

  constructor(private dictionarySerivce: DictionaryserviceService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.dictionary= this.dictionarySerivce.dictionary
  }



}
