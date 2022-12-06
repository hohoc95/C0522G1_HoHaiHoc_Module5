import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../model/ticket";
import {Observable} from "rxjs";
import {TicketSell} from "../model/ticket-sell";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:3000/';


  constructor(private httpClient: HttpClient) {
  }

  // findAllTicketSearch(departure: string, destination: string, departureDay: string, departureTime: string): Observable<Ticket[]> {
  //   return this.httpClient.get<Ticket[]>(this.API_URL + 'ticket?departure_like=' + departure + '&ticket.destination_like=' + destination + '&ticket.departureDay_like='+ departureDay + '&ticket.departureDay_like=' +departureTime);
  // }

  // findTicketSearchPaging(numberRecord: number, curPage: number, departure: string, destination: string, departureDay: string, departureTime: string): Observable<Ticket[]> {
  //   return this.httpClient.get<Ticket[]>(this.API_URL + 'ticket?_page=' + curPage + '&_limit=' + numberRecord + '&departure_like=' + departure + '&destination_like=' + destination + '&departureDay_like' + departureDay + '&departureTime_like' + departureTime);
  // }

  findAllTicketSearch(departure: string, destination: string, departureDay: string, departureTime: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_URL + 'ticket?departure_like=' + departure + '&destination_like=' + destination + '&departureDay_like='+ departureDay + '&departureDay_like=' +departureTime);
  }

  findTicketSearchPaging(numberRecord: number, curPage: number, departure: string, destination: string, departureDay: string, departureTime: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_URL + 'ticket?_page=' + curPage + '&_limit=' + numberRecord + '&departure_like=' + departure + '&destination_like=' + destination + '&departureDay_like' + departureDay + '&departureTime_like' + departureTime);
  }
  // findALl():Observable<Ticket[]>{
  //   return this.httpClient.get<Ticket[]>(this.API_URL + 'ticket');
  // }

  findAllTicketSell():Observable<TicketSell[]>{
    return this.httpClient.get<TicketSell[]>(this.API_URL + 'ticket-sell')
  }
  addTicket(ticket):Observable<Ticket>{
    return this.httpClient.post<Ticket>(this.API_URL + 'ticket',ticket);
  }

  getById(id:number):Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.API_URL + 'ticket/' + id);
  }

  //tương tự như detail
  bookTicket(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_URL + 'ticket/' + id);
  }

  updateTicket(id:number, amount:number): Observable<Ticket>{
    return this.httpClient.patch<Ticket>(this.API_URL + 'ticket/'+ id,(amount -1) )
  }
}
