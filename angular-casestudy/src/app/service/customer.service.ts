import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
const API_URL_CUSTOMER = 'http://localhost:8080/api';


export class CustomerService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers');
  }

  findAllCustomerSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL +
      'customers?customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }
/*  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL_CUSTOMER + 'customers');
  }

  findAllCustomerSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL_CUSTOMER +
      'customers?customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }*/

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + 'customers/' + id);
  }

  detailCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + 'customers/' + id);
  }

  findAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL + 'customerTypes');
  }

  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL + 'customers', customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + 'customers/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL + 'customers/' + id, customer);
  }
}
