import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepoListComponent} from "./repo/repo-list/repo-list.component";
import {RepoCreateComponent} from "./repo/repo-create/repo-create.component";
import {RepoEditComponent} from "./repo/repo-edit/repo-edit.component";


const routes: Routes = [
  {path: '', component: RepoListComponent},
  {path: 'create', component: RepoCreateComponent},
  {path: 'edit/:id', component: RepoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
