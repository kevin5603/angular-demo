import {Component, ElementRef, OnInit} from '@angular/core';
import {BackendService} from "./backend.service";
import {concatMap, mergeMap, of, switchAll, switchMap, timer} from "rxjs";
import {CalculateService} from "./calculate.service";


export class Section {
  constructor(id: string, enabled: boolean) {
    this.id = id;
    this.enabled = enabled;
  }

  id: string
  enabled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  close= 'close';
  sections: Array<Section> = new Array<Section>();
  hiddenContent = true;
  result: Section | undefined;
  result2: Section | undefined;
  data = {num: 1};
  constructor(private elf: ElementRef) {
  }


  zz($event: boolean) {
    console.log('app:' + $event);
  }

  ngOnInit(): void {
  }

  open() {
    this.elf.nativeElement.querySelector('#popover').popover();
  }

  test(): void {
    this.data = {num: this.data.num + 1};
    console.log(this.data);
  }

}
