import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerList = [];

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.customerList.push(new Customer(1, 'Huỳnh Văn Nam', 1, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(2, 'Chị Hùng', 0, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(3, 'Thị Huy', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(4, 'Thị Huy', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(5, 'Thị Huy', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(6, 'Thị Huy', 0, '191198', '0389922343', 'Đồng'));
  }

}
