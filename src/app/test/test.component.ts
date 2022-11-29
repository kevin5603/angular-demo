import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BackendService} from "../backend.service";
import {CalculateService} from "../calculate.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../modal/modal.component";
import {UtilComponent} from "../modal/util/util.component";
import {from, of, switchMap} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private backendService: BackendService, private calculateService: CalculateService, private ngbModal: NgbModal) {
  }

  ngOnInit(): void {

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
}
