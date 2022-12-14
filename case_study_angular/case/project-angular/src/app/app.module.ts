import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContractComponent } from './contract/contract.component';
import { ListComponent } from './customer/list/list.component';
import { CreateComponent } from './customer/create/create.component';
import { EditComponent } from './customer/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    CustomerComponent,
    EmployeeComponent,
    ContractComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
