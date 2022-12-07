import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket/ticket-create/ticket-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TicketEditComponent } from './ticket/ticket-edit/ticket-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketEditComponent
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
