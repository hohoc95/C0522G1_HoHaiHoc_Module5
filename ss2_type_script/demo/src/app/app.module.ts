import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3_angular_overview/calculator/calculator.component';
import { ColorPickComponent } from './ss3_angular_overview/color-pick/color-pick.component';
import { ColorPinkComponent } from './ss3_angular_overview/color-pink/color-pink.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ColorPinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

