import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { ProductListComponent } from './product-management/product/product-list/product-list.component';
import { ProductCreateComponent } from './product-management/product/product-create/product-create.component';
import { ProductEditComponent } from './product-management/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-management/product/product-delete/product-delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
