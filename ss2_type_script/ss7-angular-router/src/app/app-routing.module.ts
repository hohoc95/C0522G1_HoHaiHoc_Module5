import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {ProductListComponent} from "./product-management/product/product-list/product-list.component";
import {ProductCreateComponent} from "./product-management/product/product-create/product-create.component";
import {ProductEditComponent} from "./product-management/product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product-management/product/product-delete/product-delete.component";


const routes: Routes = [
  /*
  *  Dictionary - Từ điển
  * */
  // {path: '', component: DictionaryPageComponent},
  // {path: 'dictionary/detail/:word', component: DictionaryDetailComponent},

  /*
  *  Product management: Quản lý sản phẩm
  * */
  {path: '', component: ProductListComponent},
  {path: 'product/list', component: ProductListComponent},

  {path: '', component: ProductCreateComponent},
  {path: 'product/create', component: ProductCreateComponent},

  {path: '', component: ProductEditComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},

  {path: '', component: ProductDeleteComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
