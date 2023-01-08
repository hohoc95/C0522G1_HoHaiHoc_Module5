import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Product} from "../../model/product";
import {RepoService} from "../../service/repo.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-repo-create',
  templateUrl: './repo-create.component.html',
  styleUrls: ['./repo-create.component.css']
})
export class RepoCreateComponent implements OnInit {

  repoFormGroup: FormGroup = new FormGroup({
    repoCode: new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
    repoAmount: new FormControl('', Validators.required),
    repoDateIn: new FormControl('', Validators.required),
    repoDateStart: new FormControl('', Validators.required),
    repoDateEnd: new FormControl('', Validators.required),

  });
  productList: Product[];

  constructor(private repoService: RepoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.repoService.findAllProduct().subscribe(value => {
      this.productList = value;
    })
  }

  submit(): void {
    const repo = this.repoFormGroup.value;
    this.repoService.addRepo(repo).subscribe(() => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Game: ' + repo.product.productName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.repoFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm game thành công!');
    });
  }

}
