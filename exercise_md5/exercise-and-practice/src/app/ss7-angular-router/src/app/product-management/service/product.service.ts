import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] =[];

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.api_product_url);
  }

  setProducts(value: Product[]){
    this.products = value;
  }

  save(product: Product): Observable<Product>{
    return this._httpClient.post<Product>(
      environment.api_product_url, product);
  }

  // getProductByIndex(index: number){
  //   return this.products[index];
  // }

  // saveProduct(product) {
  //   this.products.push(product);
  // }

  saveProduct(product: Product): Observable<Product>{
    return this._httpClient.post<Product>(
      environment.api_product_url, product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }

}
