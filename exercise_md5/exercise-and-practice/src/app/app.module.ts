import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3/calculator/calculator.component';
import { ColorPickComponent } from './ss3/color-pick/color-pick.component';
import {FormsModule} from '@angular/forms';
import { ArticleComponent } from './ss4_angular_component_template/article/article.component';
import { FooterComponent } from './ss4_angular_component_template/article/footer/footer.component';
import { LikeComponent } from './ss4_angular_component_template/article/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/article/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ArticleComponent,
    FooterComponent,
    LikeComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
