import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerListPaging: Contract[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.findAllContract()
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.contractService.findContractPaging(this.numberRecord, this.curPage).subscribe(value => {
      this.customerListPaging = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị danh sách hợp đồng!');
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }}
