import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
  {
    path: 'customer-details', 
    component: CustomerComponent
  },
  {
    path: '**',
    redirectTo: 'customer-details',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'customer-details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
