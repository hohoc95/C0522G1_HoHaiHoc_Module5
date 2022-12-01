import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  nameSearch = '';
  typeSearch = '';
  customersTypes: CustomerType[];
  customerListPaging: Customer[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.getAllCustomerPaging();
  }

  getAllCustomerPaging(): void {
    this.customerService.findAllCustomerSearch(this.nameSearch, this.typeSearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.nameSearch, this.typeSearch).subscribe(pagingList => {
      this.customerListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });
  }

  getAllCustomerType(): void {
    this.customerService.findAllCustomerType().subscribe(list => {
      this.customersTypes = list;
    }, error => {
      console.log(error);
    });
  }

  next(): void {
    this.curPage++;
    this.getAllCustomerPaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllCustomerPaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.nameSearch = '';
    this.typeSearch = '';
  }

  searchByMore(): void {
    this.curPage = 1;
    this.getAllCustomerPaging();
  }

  deleteCustomer(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Khách hàng: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Khách hàng: ' + name + ' (id: ' + id + ').',
            showConfirmButton: false,
            timer: 2000
          });

          this.curPage = 1;
          this.getAllCustomerPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
