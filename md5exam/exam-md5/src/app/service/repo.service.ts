import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repo} from "../model/repo";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private API_URL= 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  findAllRepoSearch(nameSearch: string, dateInSearch: string, dateEndSearch: string): Observable<Repo[]>{
    return this.httpClient.get<Repo[]>('http://localhost:3000/'+ 'repo?repoDateIn_like=' + dateInSearch + '&repoDateEnd_like=' + dateEndSearch + '&product.productName_like=' + nameSearch);
  }

  findRepoSearchPaging(numberRecord: number, curPage: number, nameSearch: string, dateInSearch: string, dateEndSearch: string): Observable<Repo[]>{
    return this.httpClient.get<Repo[]>('http://localhost:3000/' + 'repo?_page=' + curPage + '&_limit=' + numberRecord + '&repoDateIn_like=' + dateInSearch + '&repoDateEnd_like=' + dateEndSearch + '&product.productName_like=' + nameSearch);
  }

  findAllProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:3000/' + 'product');
  }

  deteleGame(id: number): Observable<Repo> {
    return this.httpClient.delete<Repo>('http://localhost:3000/' + 'repo/' + id)
  }

  getById(id: number): Observable<Repo> {
    return this.httpClient.get<Repo>('http://localhost:3000/' + 'repo/' + id)
  }

  addRepo(repo): Observable<Repo>{
    return this.httpClient.post<Repo>('http://localhost:3000/' + 'repo', repo);
  }

  updateRepo(id: number, repo:Repo): Observable<Repo>{
    return this.httpClient.put<Repo>(this.API_URL + 'repo/' + id, repo)
  }

}
