import { Injectable } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private modalService: NgbModal) { }


  openNewModal(comp: any): void {
    this.modalService.open(comp);
  }


}
