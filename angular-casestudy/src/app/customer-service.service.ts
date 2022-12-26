import { Injectable } from '@angular/core';
import {Customer} from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
customer: Customer[];
  constructor() {
this.customer.push({customerId: 1, customerName: 'Huỳnh Văn Nam', customerBirthday: '19/11/1993', customerGender: '1',
                    customerIdCard: '1911', customerPhone: '0289922342', customerEmail: 'namhuynh1911@gmail.com',
                    customerAddress: 'quảng nam', customerType: 'vàng'},
                    {customerId: 2, customerName: 'Nguyễn Văn Phúc', customerBirthday: '19/11/1993', customerGender: '1',
                      customerIdCard: '1911', customerPhone: '0289922342', customerEmail: 'namhuynh1911@gmail.com',
                      customerAddress: 'quảng nam', customerType: 'vàng'});
  }
  findAll() {
    return this.customer;
  }
}
