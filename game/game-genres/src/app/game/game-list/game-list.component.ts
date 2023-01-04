import {Component, OnInit} from '@angular/core';
import {Genres} from "../../model/genres";
import {Game} from "../../model/game";
import {GameService} from "../../service/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  nameSearch = '';
  codeSearch = '';
  productSearch = '';
  genresSearch = '';
  genres: Genres[];
  gameListPaging: Game[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.getAllGenres();
    this.getAllGamePaging();
  }

  getAllGamePaging(): void {
    this.gameService.findAllGameSearch(this.nameSearch, this.codeSearch, this.productSearch, this.genresSearch).subscribe(list => {
      this.totalPage = Math.ceil(list.length / this.numberRecord);
    }, error => {
      console.log(error);
    });
    this.gameService.findGameSearchPaging(this.numberRecord, this.curPage, this.nameSearch, this.codeSearch, this.productSearch, this.genresSearch).subscribe(pagingList => {
      this.gameListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log("Hiển thị game ở trang " + this.curPage);
    });
  }

  getAllGenres(): void {
    this.gameService.findAllGenres().subscribe(list => {
      this.genres = list;
    }, error => {
      console.log(error);
    });
  }

  next(): void {
    this.curPage++;
    this.getAllGamePaging();
  }

  previos(): void {
    this.curPage--;
    this.getAllGamePaging();
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.nameSearch = '';
    this.codeSearch = '';
    this.productSearch = '';
    this.genresSearch = '';
  }

  searchByMore(): void {
    this.curPage = 1;
    this.getAllGamePaging();
  }

}
