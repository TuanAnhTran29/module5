import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
})
export class NamecardComponent implements OnInit {

  @Input() cardName: any;
  @Input() email: any;
  @Input() phone: any;

  constructor() { }

  ngOnInit(): void {
  }

}
