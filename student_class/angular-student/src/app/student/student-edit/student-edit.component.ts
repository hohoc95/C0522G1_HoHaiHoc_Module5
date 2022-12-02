import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../model/class";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentFormGroup: FormGroup;
  studentId: number;
  classList: Class[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.findAllClass().subscribe(value => {
      this.classList = value;
    });

    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    // });
    this.studentId = Number(this.activatedRoute.snapshot.params.id);

    this.studentService.getById(this.studentId).subscribe(student => {
      this.studentFormGroup = new FormGroup({
        studentName: new FormControl(student.studentName, Validators.required),
        studentGender: new FormControl(student.studentGender, Validators.required),
        studentAge: new FormControl(student.studentAge, Validators.required),
        studentAddress: new FormControl(student.studentAddress, Validators.required),
        studentPoint: new FormControl(student.studentPoint, Validators.required),
        class: new FormControl(student.class, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateStudent(id: number) {
    const student = this.studentFormGroup.value;
    this.studentService.updateStudent(id, student).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Học sinh: ' + student.studentName,
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
