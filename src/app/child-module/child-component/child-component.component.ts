import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  url: string;

  constructor(@Inject('url') private env_url: any) { }

  ngOnInit(): void {
    console.log('1' + this.env_url);
    this.url = this.env_url;
  }

}
