import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  title = 'AngularForm';

  //tạo đối tượng rfStudent
  rfStudent: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfStudent = this._formBuilder.group({
      name: [, [
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      point: [, [
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      address: [,
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      password: [,
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      confirmPassword: [,
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]
    })
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }

}
