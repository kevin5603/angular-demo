import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes
} from '@angular/animations';
 import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        // height: '200px',
        // opacity: 0.1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '100px',
        // opacity: 0.8,
        backgroundColor: 'yellow'
      })),
      transition('open => closed', [
        animate('5s', keyframes([
          style({ backgroundColor: "red", offset: 0 }),
          style({ backgroundColor: "blue", offset: 0.8 }),
          style({ backgroundColor: "orange", offset: 0.9 }),
          style({ backgroundColor: "black", offset: 1 })
        ]))
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class DemoComponent implements OnInit {

  isOpen = true;
  isActive: boolean = false;

  faExclamationTriangle = faExclamationTriangle;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    this.isActive = true;
  }
}
