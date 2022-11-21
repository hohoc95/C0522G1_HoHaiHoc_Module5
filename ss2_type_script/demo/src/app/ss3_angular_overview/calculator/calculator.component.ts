import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  first_number: number;
  second_number: number;

  result: number = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  addition() {
    this.result = parseInt(String(this.first_number)) + parseInt(String(this.second_number));
    return this.result;
  }

  subtraction() {
    this.result = parseInt(String(this.first_number)) - parseInt(String(this.second_number));
    return this.result;
  }

  multiplication() {
    this.result = parseInt(String(this.first_number)) * parseInt(String(this.second_number));
    return this.result;
  }

  division() {
    this.result = parseInt(String(this.first_number)) / parseInt(String(this.second_number));
    return this.result;
  }
}
