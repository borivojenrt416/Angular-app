import { Component, OnInit, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription, map, tap } from 'rxjs';
import { ChildComponent } from '../child/child.component';

export interface Person {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  username: string;
  work: IWorkInterface
};

export interface IWorkInterface {
  jobTitle: string,
  salary: string,
  vacationDays: number
};

@Component({
  standalone: true,
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  imports: [
    ChildComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CustomerComponent implements OnInit {

  firstName = new FormControl<string>('');
  firstSignal: WritableSignal<string> = signal<string>('Initial value');
  subscription: Subscription = new Subscription();
  secondSignalFromObservable = toSignal(this.firstName.valueChanges.pipe(
    map(() => this.firstName.value)
  ))

  computedSignal: Signal<string> = computed<string>(() => {
    return this.firstSignal() + '. This is computed signal!'
  });

  public person: WritableSignal<Person> = signal({
    firstname: 'Michael',
    lastname: 'Michaelson',
    mobile: '+4911111111',
    email: 'michael@gmail.com',
    username: 'michael1',
    work: {
      jobTitle: 'Writter',
      salary: '950$',
      vacationDays: 23
    }
  });

  constructor() {
    // Operation depending on signal "firstSignal"
    effect(() => {
      console.log(`The signal value is: ${this.firstSignal()}`);
    });

    // Operation depending on signal "person" with untracked signal "firstSignal"
    effect(() => {
      console.log("New persons mobile is: " + this.person().mobile + " . First signal value is: " + untracked(this.firstSignal))
    });
  }

  setSignal(): void {
    console.log(this.firstName.value);
    if (this.firstName.value !== null) {
      this.firstSignal.set(this.firstName.value);
    }
  }

  mutateSignalObject(): void {
    this.person.mutate((value: Person) => {
      value.mobile = '+49999999999';
    })
  }

  ngOnInit() {
    this.subscription = this.firstName.valueChanges.pipe(
      tap(res => console.log('res:', res))
    ).subscribe()
  }

  public increaseVacationDays() {
    this.person.mutate((value: Person) => {
      value.work.vacationDays +=1;
    })
  }
}
