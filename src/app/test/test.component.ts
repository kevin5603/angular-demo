import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('my-demo', [
      state('red', style({
        color: 'red'
      })),
      state('yellow', style({
        color: 'blue'
      })),
      transition('red <=> yellow', [
        animate('2s')
      ])
    ]),
  ]
})
export class TestComponent implements OnInit {

  isActive = false;
  text = 'close';
  isTrue = true;
  constructor() { }

  ngOnInit(): void {
  }

  demo() {
    this.isTrue = !this.isTrue;
  }

  test() {
    this.isActive = true;
  }
}
