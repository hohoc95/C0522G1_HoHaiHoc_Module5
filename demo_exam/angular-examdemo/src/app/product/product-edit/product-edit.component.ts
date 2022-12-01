import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup: FormGroup;
  productId: number;
  categoryList: Category[];


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(value => {
      this.categoryList = value;
    });

    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    // });
    this.productId = Number(this.activatedRoute.snapshot.params.id);

    this.productService.getById(this.productId).subscribe(product => {
      this.productFormGroup = new FormGroup({
        productName: new FormControl(product.productName, Validators.required),
        productPrice: new FormControl(product.productPrice, [Validators.required,Validators.max(3000),Validators.min(1000)]),
        productDescription: new FormControl(product.productDescription, [Validators.required,Validators.maxLength(25)]),
        category: new FormControl(product.category, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateProduct(id: number) {
    const product = this.productFormGroup.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Sản phẩm: ' + product.productName,
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật sản phẩm thành công!');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
