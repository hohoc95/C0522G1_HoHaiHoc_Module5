import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerModule} from './customer/customer.module';
// import {FacilityModule} from './facility/facility.module';
// import {ContractModule} from './contract/contract.module';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)},
  // {path: 'facility', loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)},
  // {path: 'contract', loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
