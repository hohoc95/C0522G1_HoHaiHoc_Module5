import { Component, OnInit } from '@angular/core';
import {Student} from "./model/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students :Student[]=[
    {name:"A", gender: 0, point:10},
    {name:"B", gender: 1, point:10},
    {name:"C", gender: 0, point:10},
    {name:"D", gender: 0, point:10},
    {name:"E", gender: 1, point:10},
    {name:"F", gender: 2, point:10},
  ]
  // onToggle(){
  //   this.
  // }

}
