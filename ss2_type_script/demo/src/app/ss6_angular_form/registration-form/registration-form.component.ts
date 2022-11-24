import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
  const passWord = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if(passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value ){
    return {"reConfirmPass": true}
  }else {
    return  null;
  }
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
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

      email: [,
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      confirmPassword: [,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      // point: [, [
      //   Validators.required,
      //   Validators.minLength(5)
      // ]
      // ],
      country: [,
        [
          Validators.required,
          // Validators.minLength(5)
        ]
      ],

      age: [,
        [
          Validators.required,
          Validators.min(19)
        ]
      ],
      gender: [,
        [
          Validators.required,
        ]
      ],

      phone: [,
        [
          Validators.required,
          Validators.pattern(/^\+84\d{9,10}$/),
          Validators.minLength(8),
          Validators.maxLength(12)
        ]
      ],

    },{validators: reConfirmPass})
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }



}
