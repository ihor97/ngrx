import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent  {
  count$:Observable<number>
  doubleCount$:Observable<number>
  constructor(private store:Store<{counter:number}>) {
    // selectCount такий принцип з використанням ф-ї є кращим тому що інфа зі Store може юзатися в багатьох місцях і міняючи в одному місці ми автоматично міняємо по всій програмі

    this.count$=store.select(selectCount)
    this.doubleCount$=store.select(selectDoubleCount)
  }
  
}
