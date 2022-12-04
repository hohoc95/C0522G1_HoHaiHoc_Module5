import {TicketSell} from "./ticket-sell";

export interface Ticket {
  id?:number;
  departure?:string //departure: điểm đi.
  destination?:string //destination: điểm đến.
  departureDay?:string //departure day: ngày khởi hành.
  departureTime?:string //departure time: giờ khởi hành.
  amount?:number;
  ticketPrice?:number;
  ticketSell?: TicketSell;
}
