import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Nhaxe} from "../../model/nhaxe";
import {VexeService} from "../../service/vexe.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-vexe-create',
  templateUrl: './vexe-create.component.html',
  styleUrls: ['./vexe-create.component.css']
})
export class VexeCreateComponent implements OnInit {
  vexeFormGroup: FormGroup = new FormGroup({
    diemDi: new FormControl('', Validators.required),
    diemDen: new FormControl('', Validators.required),
    ngayKhoiHanh: new FormControl('', Validators.required),
    gioKhoiHanh: new FormControl('', Validators.required),
    soLuong: new FormControl('', Validators.required),
    giaVe: new FormControl('', Validators.required),
    nhaXe: new FormControl('',Validators.required)
  })

  nhaxeList: Nhaxe[];


  constructor(private vexeService:VexeService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.vexeService.findAllNhaXe().subscribe(value => {
      this.nhaxeList = value;
    })
  }
  submit():void{
    const vexe = this.vexeFormGroup.value;
    this.vexeService.addVeXe(vexe).subscribe(()=>{
      Swal.fire({
        title: 'Thêm mới thành công!',
        // text: 'Học sinh: ' + vexe.studentName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.vexeFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm vé xe thành công!');
    })
  }
}
