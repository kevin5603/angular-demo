import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {BackendService} from "../backend.service";
import {CalculateService} from "../calculate.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilComponent} from "../modal/util/util.component";
import {from, switchMap} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit,AfterViewInit {
  @ViewChildren('button') buttonElements: QueryList<ElementRef>;

  myColor: string = 'green';
  myBlue = 'purple';
  @Input()
  data: {num: number};

  ngAfterViewInit(): void {
    console.log(this.buttonElements.toArray());
  }

  constructor(private backendService: BackendService, private calculateService: CalculateService, private ngbModal: NgbModal,
              private elf: ElementRef) {
    if (this.data?.num) {
     ++this.data.num;
    }
  }

  ngOnInit(): void {
    // 找出document最後一個tabindex
    // const array = this.elf.nativeElement.querySelectorAll("[tabindex]");
    // const last = array[array.length - 1];
    // console.log(last);

    const focusableElements = document.querySelectorAll(`
        a[href],
        area[href],
        input:not([disabled]),
        select:not([disabled]),
        textarea:not([disabled]),
        button:not([disabled]),
        iframe,
        object,
        embed,
        [contenteditable],
        [tabindex]
    `);

    const focusableElementsArray = Array.from(focusableElements);

// Log the array of focusable elements to the console
//     console.log(focusableElementsArray);



  }


  open() {
    const ref = this.ngbModal.open(UtilComponent);
    this.calculateService.calculate(20)
      .pipe(
        switchMap(i => from(ref.result))
      )
      .subscribe(i => {
        console.log('subscribe');
        console.log(i);
      })

    // this.backendService.send_concat_request(1);
    // setTimeout(() => {
    //   ref.close()
    // }, 1000);
  }

  test($event: KeyboardEvent) {
    console.log($event.key);
    if ($event.key == 'ArrowRight') {
      console.log(document.activeElement);
    }
  }

}
