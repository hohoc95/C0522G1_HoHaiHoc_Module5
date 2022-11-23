import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3_angular_overview/calculator/calculator.component';
import { ColorPickComponent } from './ss3_angular_overview/color-pick/color-pick.component';
import {FormsModule} from "@angular/forms";
import { ArticleComponent } from './ss4_angular_component_template/article/article.component';
import { FooterComponent } from './ss4_angular_component_template/article/footer/footer.component';
import { LikeComponent } from './ss4_angular_component_template/article/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/article/navbar/navbar.component';
import { CountdownTimesComponent } from './ss5_angular_component_interaction/countdown-times/countdown-times.component';
import { RatingBarComponent } from './ss5_angular_component_interaction/rating-bar/rating-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ArticleComponent,
    FooterComponent,
    LikeComponent,
    NavbarComponent,
    CountdownTimesComponent,
    RatingBarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

