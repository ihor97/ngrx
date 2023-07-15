import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent  {
  count$:Observable<number>
// так як тайпскріпт не знає що в нас буде обєєкт з даним ключем треба добавити дженерік
  constructor(private store:Store<{counter:number}>) {
    // вертається Observable
    this.count$=store.select('counter')
  }
  
}
