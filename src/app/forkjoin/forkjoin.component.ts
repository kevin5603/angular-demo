import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";
import {CalculateService} from "../calculate.service";
import {forkJoin, of} from "rxjs";

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor(private backendService: BackendService, private calculateService: CalculateService) { }

  ngOnInit(): void {
    forkJoin([of(1,2,3), of(4,5,6)])
      .subscribe(console.log);

  }

}
