import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './ss7_angular_router/dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './ss7_angular_router/dictionary/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: 'dictionary/detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
