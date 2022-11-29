import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
              private router:Router) {

  }

  ngOnInit() {
    this.productService.findAll().subscribe(
      data=>{
        console.log('ok')
        this.products = data;
      }, error => {
        console.log("Lấy danh sách thất bại")
      }, () => {
        console.log("Kết thúc lấy danh sách");
      }
    )
  }

  // getAll() {
  //   this.products = this.productService.getAll();
  // }

}
