import {Component, OnInit} from '@angular/core';
import {Class} from "../../model/class";
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  nameSearch = '';
  classSearch = '';
  class: Class[];
  studentListPaging: Student[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAllClass();
    this.getAllStudentPaging();
  }

  getAllStudentPaging(): void {
    this.studentService.findAllStudentSearch(this.nameSearch, this.classSearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });

    this.studentService.findStudentSearchPaging(this.numberRecord, this.curPage, this.nameSearch, this.classSearch).subscribe(pagingList => {
      this.studentListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log("Hiển thị học sinh ở trang " + this.curPage);
    });
  }

  getAllClass(): void {
    this.studentService.findAllClass().subscribe(list => {
      this.class = list;
    }, error => {
      console.log(error);
    });
  }

  next(): void {
    this.curPage++;
    this.getAllStudentPaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllStudentPaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.nameSearch = '';
    this.classSearch = '';
  }

  searchByMore():void{
    this.curPage = 1;
    this.getAllStudentPaging();
  }

  deleteStudent(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Học sinh: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudent(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Học sinh: ' + name + ' (id: ' + id + ').',
            showConfirmButton: false,
            timer: 2000
          });

          this.curPage = 1;
          this.getAllStudentPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }
  detailStudent(id: number, name: string, age:number, point:number): void {
    Swal.fire({
      title: 'Chi tiết học sinh',
      // text: 'Học sinh: ' + name + ' /n ' + ' tuổi ' + age,
      // // icon: 'info',
      html: 'Học sinh: ' + name +
        ' <br> ' + ' Tuổi ' + age + ' <br> '+ 'Điểm thi: ' + point,
      showConfirmButton:false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.detailStudent(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Xong!',
            // text: 'Học sinh: ' + name + ' (id: ' + id + ').',
            // showConfirmButton: false,
            timer: 1000
          });

          this.curPage = 1;
          this.getAllStudentPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
