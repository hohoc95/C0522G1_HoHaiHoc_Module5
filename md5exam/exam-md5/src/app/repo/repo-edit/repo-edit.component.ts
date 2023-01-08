import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/product";
import {RepoService} from "../../service/repo.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-repo-edit',
  templateUrl: './repo-edit.component.html',
  styleUrls: ['./repo-edit.component.css']
})
export class RepoEditComponent implements OnInit {

  repoFormGroup: FormGroup;
  repoId: number;
  productList: Product[];

  constructor(private repoService: RepoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.repoService.findAllProduct().subscribe( value => {
      this.productList = value;
    });
    this.repoId = Number(this.activatedRoute.snapshot.params.id);

    this.repoService.getById(this.repoId).subscribe(repo =>{
      this.repoFormGroup = new FormGroup({
        repoCode: new FormControl(repo.repoCode, Validators.required),
        product: new FormControl(repo.product, Validators.required),
        repoAmount: new FormControl(repo.repoAmount, Validators.required),
        repoDateIn: new FormControl(repo.repoDateIn, Validators.required),
        repoDateStart: new FormControl(repo.repoDateStart, Validators.required),
        repoDateEnd: new FormControl(repo.repoDateEnd, Validators.required),
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('Ok!')
    })
  }

  updateRepo(id: number){
    const repo = this.repoFormGroup.value;
    this.repoService.updateRepo(id, repo).subscribe( () =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Lô hàng: ' + repo.produc.productName,
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật lô hàng thành công!');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
