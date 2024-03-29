import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, map, Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

   switchMapData: Subject<number> = new Subject();
   concatMapData: Subject<number> = new Subject();
   mergeMapData: Subject<number> = new Subject();

  constructor() { }

  send_switch_request(n: number) {
    console.log(`${n}：switchMap 接收到請求`);
    this.switchMapData.next(n);
  }

  getSwitchMapData(): Observable<number> {
    return this.switchMapData.asObservable();
  }

  send_concat_request(n: number) {
    console.log(`${n}：concatMap 接收到請求`);
    this.concatMapData.next(n);
  }

  getConcatMapData() {
    return this.concatMapData.asObservable();
  }

  send_merge_request(n: number) {
    console.log(`${n}：mergeMap 接收到請求`);
    this.mergeMapData.next(n);
  }

  getMergeMapData() {
    return this.mergeMapData.asObservable();
  }
}
