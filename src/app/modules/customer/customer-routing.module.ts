import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {
    path: 'details',
    component: CustomerComponent
  },
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   component: CustomerComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/details',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
