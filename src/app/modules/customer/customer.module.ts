import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class CustomerModule { }
