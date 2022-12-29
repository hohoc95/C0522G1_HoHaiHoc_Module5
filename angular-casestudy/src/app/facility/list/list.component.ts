import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilityNameSearch = '';

  facilityListPaging: Facility[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  facilityNameDetail: string;
  facilityIdDetail: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    // this.facilityService.findAllFacilitySearch(this.facilityNameSearch)
    //   .subscribe(list => {
    //     this.totalPage = Math.ceil(list.length / this.numberRecord);
    //   }, error => {
    //     console.log(error);
    //   }, () => {
    //     console.log('OK!');
    //   });
    //
    // this.facilityService.findFacilitySearchPaging(this.numberRecord, this.curPage,
    //   this.facilityNameSearch).subscribe(pagingList => {
    //   this.facilityListPaging = pagingList;
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log('Hiển thị dịch vụ ở trang ' + this.curPage);
    // });


    this.getAllFacilityPaging();

  }
  getAllFacilityPaging(): void {
    this.facilityService.findAllFacilitySearch(this.facilityNameSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.facilityService.findFacilitySearchPaging(this.numberRecord, this.curPage,
      this.facilityNameSearch).subscribe(pagingList => {
      this.facilityListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị dịch vụ ở trang ' + this.curPage);
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

  getInfoFacilityDelete(facilityImage: string, facilityName: string, facilityId: number): void {
    this.facilityImageDelete = facilityImage;
    this.facilityNameDelete = facilityName;
    this.facilityIdDelete = facilityId;
  }
  getInfoFacilityDetail(facilityName: string, facilityId: number): void {
    this.facilityNameDetail = facilityName;
    this.facilityIdDetail = facilityId;
  }

  // deleteFacility(id: number, name: string): void {
  //   this.curPage = 1;
  //   this.facilityService.deleteFacility(this.facilityIdDelete).subscribe(() => {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Xóa thành công!',
  //       text: 'Dịch vụ: ' + this.facilityNameDelete,
  //       width: 600,
  //       padding: '3em',
  //       color: '#716add',
  //       background: '#fff url(/images/trees.png)',
  //       backdrop: `
  //       rgba(0,0,123,0.4)
  //       url("/images/nyan-cat.gif")
  //       left top
  //       no-repeat
  //     `
  //     });
  //     this.ngOnInit();
  //   }, error => {
  //     console.log(error);
  //   }, () => {
  //     console.log('Xóa dịch vụ thành công!');
  //   });
  // }

  deleteFacility(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      html: 'Dịch vụ: ' + name ,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facilityService.deleteFacility(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            imageUrl: 'http://imgarcade.com/1/mangekyou-sharingan-gif',
            // text: 'Dịch vụ: ' + name + ' (id: ' + id + ').',
            // showConfirmButton: false,
            timer: 1000
          });

          this.curPage = 1;
          this.getAllFacilityPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  detailFacility(id: number, name: string, descriptionOtherConvenience: string, poolArea: number, facilityFree: string, standardRoom: string): void {
    Swal.fire({
      title: 'Chi tiết dịch vụ',
      html: 'Dịch vụ: ' + name + '<br>' + 'Mô tả tiện nghi khác: ' + descriptionOtherConvenience + '<br>' +
        'Diện tích hồ bơi: ' + poolArea + ' m2' + '<br>' + 'Dịch vụ miễn phí đi kèm: ' + facilityFree + '<br>' + 'Tiêu chuẩn phòng: ' + standardRoom,
      showConfirmButton: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facilityService.detailFacility(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Xong!',
            // text: 'Dịch vụ: ' + name + ' (id: ' + id + ').',
            // showConfirmButton: false,
            timer: 1000
          });

          this.curPage = 1;
          this.getAllFacilityPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  searchName(): void {
    this.curPage = 1;
    this.ngOnInit();
  }}
