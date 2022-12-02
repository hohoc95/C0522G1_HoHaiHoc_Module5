import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vexe} from "../model/vexe";
import {Nhaxe} from "../model/nhaxe";

@Injectable({
  providedIn: 'root'
})
export class VexeService {
  private API_URL = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) {
  }

  findAllVeXeSearch(diemDi:string, diemDen:string): Observable<Vexe[]>{
    return this.httpClient.get<Vexe[]>(this.API_URL +'vexe?diemDi_like=' + diemDi + '&vexe?diemDen_like=' + diemDen);
  }

  findVeXesearchPaging(numberRecord:number, curPage:number, diemDi:string, diemDen:string): Observable<Vexe[]>{
    return this.httpClient.get<Vexe[]>(this.API_URL + 'vexe?_page=' + curPage + '&_limit='+ numberRecord + '&diemDi_like=' + diemDi + '&diemDen_like='+ diemDen);
  }

  //dat ve
  datVe(id:number):Observable<Nhaxe>{
    return this.httpClient.get<Nhaxe>(this.API_URL + 'vexe/'+ id);
  }

  findAllNhaXe():Observable<Nhaxe[]>{
    return this.httpClient.get<Nhaxe[]>(this.API_URL + 'nhaxe')
  }

  addVeXe(vexe):Observable<Vexe>{
    return this.httpClient.post<Vexe>(this.API_URL + 'vexe',vexe);
  }

  getById(id:number):Observable<Vexe>{
    return this.httpClient.get<Vexe>(this.API_URL + 'vexe/' + id);
  }
}
