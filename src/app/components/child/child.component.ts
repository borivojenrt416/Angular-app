import { Component, Input } from '@angular/core';
import { IWorkInterface } from '../customer/customer.component';

@Component({
  standalone: true,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input({required: true}) work: IWorkInterface | null = null;

constructor() {

}
}
