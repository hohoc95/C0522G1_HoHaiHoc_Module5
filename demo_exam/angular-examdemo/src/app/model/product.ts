import {Category} from "./category";

export interface Product {
  id?: number,
  productName?: string;
  productPrice?: number;
  productDescription?: string;
  category?: Category;
}
