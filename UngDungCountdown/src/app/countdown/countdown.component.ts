import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  message= "";
  remainingTime: any;

  @Input()
  second= 11;

  @Output()
  finish= new EventEmitter<boolean>();

  private intervalId= 0;

  constructor() { }

  ngOnInit(): void {
  }

  clearTimer(){
    clearInterval(this.intervalId)
  }

  private countdown(){
    this.clearTimer();
    this.intervalId= window.setInterval(() => {
      this.remainingTime-= 1;
      if (this.remainingTime==0){
        this.message= "Blast off"
        this.clearTimer();
        this.finish.emit(true);
      }else {
        this.message= `T-${this.remainingTime} seconds and counting`
      }
    },1000)
  }

  start(){
    this.countdown()
    if (this.remainingTime <= 0){
      this.remainingTime = this.second;
    }
  }

  stop(){
    this.clearTimer()
    this.message= `Holding at T-${this.remainingTime} seconds`;
  }

   reset(){
    this.clearTimer();
    this.remainingTime= this.second;
    this.message = `Click start button to start the Countdown`;
  }

}
