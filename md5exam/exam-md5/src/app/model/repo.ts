import {Product} from "./product";

export interface Repo {
  id?: number;
  repoCode?: string;
  product?: Product
  repoAmount?: number;
  repoDateIn?: string;
  repoDateStart?: string;
  repoDateEnd?: string;
}
