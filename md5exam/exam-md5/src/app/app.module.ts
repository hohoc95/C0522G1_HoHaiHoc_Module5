import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoListComponent } from './repo/repo-list/repo-list.component';
import { RepoCreateComponent } from './repo/repo-create/repo-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RepoEditComponent } from './repo/repo-edit/repo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoCreateComponent,
    RepoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
