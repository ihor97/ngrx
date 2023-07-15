import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  incrementAction } from '../store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store:Store) {}

  increment() {
    // так як ми добавили data треба тепер вказати значення тому ключу
    // this.store.dispatch(increment({value:1}))
   
    // альтернативний варіант 
    this.store.dispatch(new incrementAction(2))
  }

  decrement() {
  }
}
