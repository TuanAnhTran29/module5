import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNum: any;
  secondNum: any;
  result: any;


  add(input1: number, input2: number): number{
    return this.result= input1 + input2
  }

  subtract(input1: number, input2: number): number{
    return this.result= input1 - input2
  }

  multiply(input1: number, input2: number): number{
    return this.result= input1 * input2
  }

  div(input1: number, input2: number): number{
    if (input2 == 0){
      return this.result = 0
    }else {
      return this.result= input1 / input2
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
