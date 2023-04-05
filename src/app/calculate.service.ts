import { Injectable } from '@angular/core';
import {delay, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  calculate(n: number): Observable<string> {
    return of(n * n).pipe(
      delay(5000),
      map(res => `${n}的2次方 計算結果為：${res}`)
    );
  }
}
