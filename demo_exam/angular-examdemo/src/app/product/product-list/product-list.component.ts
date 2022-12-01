import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  nameSearch = '';
  categorySearch = '';
  category: Category[];
  productListPaging: Product[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProductPaging();
  }

  getAllProductPaging(): void {
    this.productService.findAllProductSearch(this.nameSearch, this.categorySearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });

    this.productService.findProductSearchPaging(this.numberRecord, this.curPage,
      this.nameSearch, this.categorySearch).subscribe(pagingList => {
      this.productListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị sản phẩm ở trang ' + this.curPage);
    });
  }

  getAllCategory(): void {
    this.productService.findAllCategory().subscribe(list => {
      this.category = list;
    }, error => {
      console.log(error);
    });
  }

  next(): void {
    this.curPage++;
    this.getAllProductPaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllProductPaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.nameSearch = '';
    this.categorySearch = '';
  }

  searchByMore(): void {
    this.curPage = 1;
    this.getAllProductPaging();
  }

  deleteProduct(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Sản phẩm: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Sản phẩm: ' + name + ' (id: ' + id + ').',
            showConfirmButton: false,
            timer: 2000
          });

          this.curPage = 1;
          this.getAllProductPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  detailProduct(id: number, name: string): void {
    Swal.fire({
      title: 'Chi tiết sản phẩm',
      text: 'Sản phẩm: ' + name + ' (id: ' + id + ').',
      // icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.detailProduct(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            // // title: 'Xóa thành công!',
            // text: 'Sản phẩm: ' + name + ' (id: ' + id + ').',
            // showConfirmButton: false,
            timer: 1000
          });

          this.curPage = 1;
          this.getAllProductPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
