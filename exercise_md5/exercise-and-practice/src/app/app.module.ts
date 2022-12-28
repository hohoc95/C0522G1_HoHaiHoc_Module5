import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalculatorComponent} from './ss3/calculator/calculator.component';
import {ColorPickComponent} from './ss3/color-pick/color-pick.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArticleComponent} from './ss4_angular_component_template/article/article.component';
import {FooterComponent} from './ss4_angular_component_template/article/footer/footer.component';
import {LikeComponent} from './ss4_angular_component_template/article/like/like.component';
import {NavbarComponent} from './ss4_angular_component_template/article/navbar/navbar.component';
import {CountdownTimesComponent} from './ss5_angular_component_interaction/countdown-times/countdown-times.component';
import {RatingBarComponent} from './ss5_angular_component_interaction/rating-bar/rating-bar.component';
import {RegistrationFormComponent} from './ss6_angular_form/registration-form/registration-form.component';
import {LoginFormComponent} from './ss6_angular_form/login-form/login-form.component';

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
    RegistrationFormComponent,
    LoginFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
