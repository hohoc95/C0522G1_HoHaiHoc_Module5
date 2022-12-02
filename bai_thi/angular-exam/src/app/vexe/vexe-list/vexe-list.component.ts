import {Component, OnInit} from '@angular/core';
import {Nhaxe} from "../../model/nhaxe";
import {Vexe} from "../../model/vexe";
import {VexeService} from "../../service/vexe.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vexe-list',
  templateUrl: './vexe-list.component.html',
  styleUrls: ['./vexe-list.component.css']
})
export class VexeListComponent implements OnInit {

  diemDi = '';
  diemDen = '';
  nhaxe: Nhaxe[];
  vexeListPaging: Vexe[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private vexeService: VexeService) {
  }

  ngOnInit(): void {
    this.getAllNhaXe();
    this.getAllVeXePaging();
  }

  getAllVeXePaging(): void {
    this.vexeService.findAllVeXeSearch(this.diemDi, this.diemDen).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error)
    })

    this.vexeService.findVeXesearchPaging(this.numberRecord, this.curPage, this.diemDi, this.diemDen).subscribe(pagingList => {
      this.vexeListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log("Hiển thị ve xe  ở trang " + this.curPage);
    });
  }

  getAllNhaXe(): void {
    this.vexeService.findAllNhaXe().subscribe(list => {
      this.nhaxe = list;
    }, error => {
      console.log(error);
    });
  }

  next(): void {
    this.curPage++;
    this.getAllVeXePaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllVeXePaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }


  resetSearchInput(): void {
    this.diemDi = '';
    this.diemDen = '';
  }

  searchByMore():void{
    this.curPage = 1;
    this.getAllVeXePaging();
  }

  datve(id: number, diemDi: string, diemDen:string, ngayKhoiHanh:string, gioKhoiHanh:string): void {
    Swal.fire({
      title: 'Đặt vé',

      html: 'Bạn có chắc muốn đặt vé từ ' + diemDi + ' đến ' + diemDen + ' vào ' + gioKhoiHanh + ' ngay ' + ngayKhoiHanh,
      showConfirmButton:true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có!',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vexeService.datVe(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Đặt vé thành công!',
            timer: 1000
          });

          this.curPage = 1;
          this.getAllVeXePaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
