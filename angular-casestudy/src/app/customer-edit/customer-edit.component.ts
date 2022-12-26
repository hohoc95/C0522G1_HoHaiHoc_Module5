import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../customer-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerId: number;

  constructor(private customerService: CustomerServiceService,
              private router: Router) {
    this.customerForm = new FormGroup({
      customerId: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerDateOfBirth: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhoneNumber: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
  }

  getCustomer() {
    return this.customerService.findAll();
  }

  ngOnInit(): void {
  }

}
