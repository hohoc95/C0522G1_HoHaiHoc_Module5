import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customerFormGroup: FormGroup = new FormGroup({
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required)
  });

  customerTypeList: CustomerType[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
  }

  submit(): void {
    const customer = this.customerFormGroup.value;
    this.customerService.addCustomer(customer).subscribe(() => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Khách hàng: ' + customer.customerName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.customerFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('customer/list');
      console.log('Thêm mới khách hàng thành công!');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
