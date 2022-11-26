import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3_angular_overview/calculator/calculator.component';
import { ColorPickComponent } from './ss3_angular_overview/color-pick/color-pick.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ArticleComponent } from './ss4_angular_component_template/article/article.component';
import { FooterComponent } from './ss4_angular_component_template/article/footer/footer.component';
import { LikeComponent } from './ss4_angular_component_template/article/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/article/navbar/navbar.component';
// import { CountdownTimesComponent } from './ss5_angular_component_interaction/countdown-times/countdown-times.component';
import { RatingBarComponent } from './ss5_angular_component_interaction/rating-bar/rating-bar.component';
import { DemoFormComponent } from './ss6_angular_form/demo-form/demo-form.component';
import { RegistrationFormComponent } from './ss6_angular_form/registration-form/registration-form.component';
import { LoginFormComponent } from './ss6_angular_form/login-form/login-form.component';
import { DictionaryDetailComponent } from './ss7_angular_router/dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './ss7_angular_router/dictionary/dictionary-page/dictionary-page.component';
// import { CreateComponent } from './ss6_angular_form/demo-form/create/create.component';
// import { DetailComponent } from './ss6_angular_form/demo-form/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ArticleComponent,
    FooterComponent,
    LikeComponent,
    NavbarComponent,
    // CountdownTimesComponent,
    RatingBarComponent,
    DemoFormComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    // CreateComponent,
    // DetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

