import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";
import {CalculateService} from "../calculate.service";
import {concatMap, mergeMap, switchMap} from "rxjs";

@Component({
  selector: 'app-map-family',
  templateUrl: './map-family.component.html',
  styleUrls: ['./map-family.component.scss']
})
export class MapFamilyComponent implements OnInit {
  switch_text: string[] = [];
  switch_map_number = 0;

  concat_text: string[] = [];
  concat_map_number = 0;

  merge_text: string[] = [];
  merge_map_number = 0;

  constructor(private backendService: BackendService, private calculateService: CalculateService) {
  }

  call() {
    this.backendService.getSwitchMapData()
      .pipe(
        switchMap(o => this.calculateService.calculate(o))
      )
      .subscribe(i => {
        this.switch_text.push(i);
        console.log(i);
      });
  }

  ngOnInit(): void {
    this.call();


    this.backendService.getConcatMapData()
      .pipe(
        concatMap(o => this.calculateService.calculate(o))
      )
      .subscribe(i => {
        this.concat_text.push(i);
        console.log(i);
      });

    this.backendService.getMergeMapData()
      .pipe(
        mergeMap(o => this.calculateService.calculate(o))
      )
      .subscribe(i => {
        this.merge_text.push(i);
        console.log(i);
      });

  }

  switch_map_request() {
    this.backendService.send_switch_request(++this.switch_map_number);
  }

  concat_map_request() {
    this.backendService.send_concat_request(++this.concat_map_number);
  }

  merge_map_request() {
    this.backendService.send_merge_request(++this.merge_map_number);
  }

  clear() {
    this.switch_text = [];
    this.concat_text = [];
    this.merge_text = [];
    this.switch_map_number = 0;
    this.concat_map_number = 0;
    this.merge_map_number = 0;
  }

}
