import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VexeListComponent } from './vexe/vexe-list/vexe-list.component';
import { VexeCreateComponent } from './vexe/vexe-create/vexe-create.component';
import { VexeEditComponent } from './vexe/vexe-edit/vexe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VexeListComponent,
    VexeCreateComponent,
    VexeEditComponent
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
