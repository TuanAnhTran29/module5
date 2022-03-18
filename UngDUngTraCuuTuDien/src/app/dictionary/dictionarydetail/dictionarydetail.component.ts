import { Component, OnInit } from '@angular/core';
import {DictionaryserviceService} from "../../service/dictionaryservice.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dictionarydetail',
  templateUrl: './dictionarydetail.component.html',
  styleUrls: ['./dictionarydetail.component.css']
})
export class DictionarydetailComponent implements OnInit {

  word: any;

  constructor(
    private dictionaryService: DictionaryserviceService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.word = this.dictionaryService.translate(word);
    });
  }

}
