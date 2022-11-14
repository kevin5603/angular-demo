import {Component, OnInit} from '@angular/core';
import {BackendService} from "./backend.service";
import {concatMap, mergeMap, of, switchAll, switchMap, timer} from "rxjs";
import {CalculateService} from "./calculate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {
  }


}
