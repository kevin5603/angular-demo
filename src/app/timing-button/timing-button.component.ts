import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {state, style} from "@angular/animations";

@Component({
  selector: 'app-timing-button',
  templateUrl: './timing-button.component.html',
  styleUrls: ['./timing-button.component.scss'],
  // animations: [
  //   state('open', style({
  //     height: '200px',
  //     opacity: 1,
  //     backgroundColor: 'yellow'
  //   })),
  //   state('closed', style({
  //     height: '100px',
  //     opacity: 0.8,
  //     backgroundColor: 'blue'
  //   })),
  // ]

})
export class TimingButtonComponent implements OnInit {
  isActive: boolean = false;

  @Input()
  duration: number;

  @Input()
  content: string;

  @Output()
  trigger = new EventEmitter<boolean>();
  durationSecond: number = 8000; // default milliseconds

  constructor(private renderer2: Renderer2, private elf: ElementRef) {
  }

  ngOnInit(): void {

  }

  test() {
    this.isActive = !this.isActive;
    console.log('關掉.....');
    this.trigger.emit(true);
  }

  ngAfterViewInit(): void {
    this.durationSecond = Number(this.duration) / 1000;
    const buttonWidth = this.elf.nativeElement.querySelector('.button').offsetWidth;
    const pxPerSecond = buttonWidth / this.durationSecond;

    const delayTime = 12 / pxPerSecond;
    const button_progress = this.elf.nativeElement.querySelector('.button_progress');
    this.renderer2.setStyle(button_progress, 'transition', 'width ' + this.durationSecond + 's linear');

    const text_color = this.elf.nativeElement.querySelector('.text-color');
    const textProgressTime = this.durationSecond - (delayTime * 2);
    this.renderer2.setStyle(text_color, 'transition', 'width ' + textProgressTime + 's linear');
    this.renderer2.setStyle(text_color, 'transition-delay', delayTime + 's');

    this.renderer2.addClass(button_progress, 'active');
    this.renderer2.addClass(text_color, 'active');
    setTimeout(() => {
      this.test();
    }, this.duration);
  }

}
