import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../model/game";
import {Genres} from "../model/genres";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private API_URP = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllGameSearch(nameSearch: string, codeSearch: string, productSearch: string, genresSearch: string): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.API_URP + 'game?gameName_like=' + nameSearch + '&gameCode_like=' + codeSearch + '&gameProduct_like=' + productSearch + '&genres.genresName_like=' + genresSearch);
  }

  findGameSearchPaging(numberRecord: number, curPage: number, nameSearch: string, codeSearch: string, productSearch: string, genresSearch: string): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.API_URP + 'game?_page=' + curPage + '&_limit=' + numberRecord + '&gameName_like=' + nameSearch + '&gameCode_like=' + codeSearch + '&gameProduct_like=' + productSearch + '&genres.genresName_like=' + genresSearch);
  }

  findAllGenres(): Observable<Genres[]>{
    return this.httpClient.get<Genres[]>(this.API_URP + 'genres');
  }
}
