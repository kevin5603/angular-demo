import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TempUtilComponent} from "../temp-util/temp-util.component";

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss']
})
export class UtilComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
    // setTimeout(()=> {
    //   console.log('close...');
    //   this.activeModal.close({complete: true});
    // }, 2000);
  }

  close() {
    this.modalService.dismissAll();
  }

  open() {
    const ref = this.modalService.open(TempUtilComponent);
    setTimeout(() => {
      this.activeModal.close();
      ref.close();
    }, 3000)
  }
}
