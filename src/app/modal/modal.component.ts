import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilComponent} from "./util/util.component";
import {ModalServiceService} from "../modal-service.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  text = 'empty';
  data: string = '';
  ngOnInit(): void {
    this.timeout();
    this.getDetail().then((data: string) => this.data = data);
  }

  open() {
    this.modalService.openNewModal(UtilComponent);
  }

  getDetail(): Promise<string> {
    const resultPromise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromise;
  }

  timeout() {
    setTimeout(() => {
      this.text = 'hello';
    }, 5000);
  }
}
