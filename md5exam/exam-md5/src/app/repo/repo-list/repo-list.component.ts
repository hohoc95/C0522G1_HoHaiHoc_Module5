import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {Repo} from "../../model/repo";
import {RepoService} from "../../service/repo.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  nameSearch = '';
  dateInSearch = '';
  dateEndSearch = '';
  product: Product[];
  repoListPaging: Repo[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private repoService: RepoService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllRepoPaging();
  }

  getAllRepoPaging(): void {
    this.repoService.findAllRepoSearch(this.nameSearch, this.dateInSearch, this.dateEndSearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });
    this.repoService.findRepoSearchPaging(this.numberRecord, this.curPage, this.nameSearch, this.dateInSearch, this.dateEndSearch).subscribe(pagingList => {
      this.repoListPaging = pagingList;
    }, error => {
      console.log(error)
    }, () => {
      console.log('Hiển thị lô hàng ở trang ' + this.curPage)
    })
  }

  getAllProduct(): void {
    this.repoService.findAllProduct().subscribe(list => {
      this.product = list;
    }, error => {
      console.log(error)
    });
  }

  next(): void {
    this.curPage++;
    this.getAllRepoPaging();
  }
  previos(): void {
    this.curPage--;
    this.getAllRepoPaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void{
    this.nameSearch = '';
    this.dateInSearch = '';
    this.dateEndSearch = '';
  }

  searchByMore(): void{
    this.curPage = 1;
    this.getAllRepoPaging()
  }
  deleteGame(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Lô hàng: ' + name + ' (id: ' + id + ').',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.repoService.deteleGame(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Lô hàng: ' + name + ' (id: ' + id + ').',
            showConfirmButton: false,
            timer: 2000
          });

          this.curPage = 1;
          this.getAllRepoPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
