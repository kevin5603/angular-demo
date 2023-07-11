import { Component, OnInit } from '@angular/core';
import {ModalServiceService} from "../../modal-service.service";

@Component({
  selector: 'app-temp-util',
  templateUrl: './temp-util.component.html',
  styleUrls: ['./temp-util.component.scss']
})
export class TempUtilComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  ngOnInit(): void {
  }



}
