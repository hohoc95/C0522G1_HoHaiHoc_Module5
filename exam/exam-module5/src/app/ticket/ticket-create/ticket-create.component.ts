import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketSell} from "../../model/ticket-sell";
import {TicketService} from "../../service/ticket.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  ticketFormGroup: FormGroup = new FormGroup({
    departure: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    departureDay: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    ticketPrice: new FormControl('', Validators.required),
    ticketSell: new FormControl('', Validators.required)
  })

  ticketSellList: TicketSell[];

  constructor(private ticketService:TicketService,
              private router :Router) { }

  ngOnInit(): void {
    this.ticketService.findAllTicketSell().subscribe(value => {
      this.ticketSellList = value;
    })
  }

  submit():void{
    const ticket = this.ticketFormGroup.value;
    this.ticketService.addTicket(ticket).subscribe(()=>{
      Swal.fire({
        title: 'Thêm mới thành công!',
        // text: 'Học sinh: ' + vexe.studentName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.ticketFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm vé xe thành công!');
    })
  }

}
