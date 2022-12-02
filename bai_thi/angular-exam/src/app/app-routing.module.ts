import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VexeListComponent} from "./vexe/vexe-list/vexe-list.component";
import {VexeCreateComponent} from "./vexe/vexe-create/vexe-create.component";
import {VexeEditComponent} from "./vexe/vexe-edit/vexe-edit.component";


const routes: Routes = [
  {path: '', component: VexeListComponent},
  {path: 'create', component: VexeCreateComponent},
  {path:'edit/id',component:VexeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
