import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormGroup: FormGroup;
  customerId: number;
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

    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    // });
    this.customerId = Number(this.activatedRoute.snapshot.params.id);

    this.customerService.getById(this.customerId).subscribe(customer => {
      this.customerFormGroup = new FormGroup({
        customerName: new FormControl(customer.customerName, Validators.required),
        customerBirthday: new FormControl(customer.customerBirthday, this.checkMinAge18AndMaxAge80),
        customerGender: new FormControl(customer.customerGender, Validators.required),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
        customerAddress: new FormControl(customer.customerAddress, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerFormGroup.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Khách hàng: ' + customer.customerName,
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật khách hàng thành công!');
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
