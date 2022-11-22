import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes
} from '@angular/animations';
 import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {timeout} from "rxjs";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('void => open', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
  ]
})
export class DemoComponent implements OnInit, AfterViewInit{
  isActive: boolean = false;

  text: string = 'close';
  isTrue = true;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  demo() {
    this.isTrue = !this.isTrue;
  }

  constructor(private renderer2: Renderer2) {
  }


  ngOnInit(): void {
  }

  test() {
    this.isActive = !this.isActive ;

  }

  clear() {
    this.isActive = false;
  }

  ngAfterViewInit(): void {
  }
}
