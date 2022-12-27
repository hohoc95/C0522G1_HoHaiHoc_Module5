import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Class} from '../../model/class';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentFormGroup: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1}[a-z]{2,30}\\s[A-Z]{1}[a-z]{2,30})$')]),
    studentGender: new FormControl('', Validators.required),
    studentAge: new FormControl('', Validators.required),
    studentAddress: new FormControl('', Validators.required),
    studentPoint: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  });
  classList: Class[];

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.findAllClass().subscribe(value => {
      this.classList = value;
    });
  }

  submit(): void {
    const student = this.studentFormGroup.value;
    this.studentService.addStudent(student).subscribe(() => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Học sinh: ' + student.studentName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.studentFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm học sinh thành công!');
    });
  }

}
