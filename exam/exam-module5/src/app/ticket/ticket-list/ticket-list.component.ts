import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {TicketService} from "../../service/ticket.service";
import {TicketSell} from "../../model/ticket-sell";
import {Ticket} from "../../model/ticket";


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  departure = '';
  destination= '';
  departureDay = '';
  departureTime = '';
  ticketSell: TicketSell[];
  ticketListPaging: Ticket[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.getAllTicketSell();
    this.getAllTicketPaging();

  }

  getAllTicketPaging():void{
    this.ticketService.findAllTicketSearch(this.departure, this.destination, this.departureDay, this.departureTime).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });

    this.ticketService.findTicketSearchPaging(this.numberRecord, this.curPage, this.departure, this.destination, this.departureDay, this.departureTime).subscribe(pagingList => {
      this.ticketListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log("Hiển thị vé xe ở trang " + this.curPage);
    });
  }


  getAllTicketSell(): void {
    this.ticketService.findAllTicketSell().subscribe(list => {
      this.ticketSell = list;
    }, error => {
      console.log(error)
    });
  }

  next(): void {
    this.curPage++;
    this.getAllTicketPaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllTicketPaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.departure = '';
    this.destination = '';
    this.departureDay = '';
    this.departureTime = '';
  }

  searchByMore():void{
    this.curPage = 1;
    this.getAllTicketPaging();
  }

  bookTicket(id: number, departure: string, destination: string, departureDay: string, departureTime: string, amount:number): void {
    Swal.fire({
      title: 'Đặt vé',
      // text: 'Học sinh: ' + name + ' /n ' + ' tuổi ' + age,
      // // icon: 'info',
      html: 'Bạn có chắc muốn đặt vé từ ' + departure + ' đến ' + destination + ' vào ' + departureTime + ' ngay ' + departureDay,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ticketService.bookTicket(id).subscribe(() => {
          Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Xong!',
            // text: 'Học sinh: ' + name + ' (id: ' + id + ').',
            // showConfirmButton: false,
            timer: 1000
          });
          // this.curPage = 1;
          // this.getAllStudentPaging();
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
