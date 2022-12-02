import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket/ticket-create/ticket-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
