import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';

  customerListPaging: Customer[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  customerNameDelete: string;
  customerIdDelete: number;

  customerNameDetail: string;
  customerIdDetail: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch).subscribe(pagingList => {
      this.customerListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });
    this.getAllCustomerPaging();


  }
  getAllCustomerPaging(): void {
    // tslint:disable-next-line:max-line-length
    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch).subscribe(pagingList => {
      this.customerListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });
  }
  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }
  getInfoCustomerDetail(customerName: string, customerId: number): void {
    this.customerNameDetail = customerName;
    this.customerIdDetail = customerId;
  }

  deleteCustomer(): void {
    this.curPage = 1;
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      // 1 thông báo vip-pro:
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.customerNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

/*  detailCustomer(id: number, name: string): void {
    this.curPage = 1;
    this.customerService.detailCustomer(this.customerIdDetail).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Chi tiết khách hàng!',
        html: 'Khách hàng' + name + '<br>' ,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }*/

    detailStudent(id: number, name: string, type: string, email: string, address: string, cccd: string): void {
      Swal.fire({
        title: 'Chi tiết khách hàng',
        html: 'Khách hàng: ' + name + '<br>' + 'Loại khách: ' + type + '<br>' + 'Email: ' + email
          + '<br>' + 'Địa chỉ: ' + address + '<br>' + 'CCCD/CMND: ' + cccd,
        showConfirmButton: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Đóng'
      }).then((result) => {
        if (result.isConfirmed) {
          this.customerService.detailCustomer(id).subscribe(() => {
            Swal.fire({
              // position: 'center',
              icon: 'success',
              title: 'Xong!',
              // text: 'Học sinh: ' + name + ' (id: ' + id + ').',
              // showConfirmButton: false,
              timer: 1000
            });

            this.curPage = 1;
            this.getAllCustomerPaging();
          }, error => {
            console.log(error);
          });
        }
      });
    }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }
}
