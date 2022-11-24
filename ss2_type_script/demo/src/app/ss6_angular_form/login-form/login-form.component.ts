import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  title = 'AngularLogin';

  //tạo đối tượng rfLogin
  rfLogin: FormGroup;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfLogin = this._formBuilder.group({

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

    }
    )
  }
    onSubmit()
    {
      if (this.rfLogin.valid) {
        console.log(this.rfLogin.value);
      }
    }

  }
