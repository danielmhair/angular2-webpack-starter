import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sds-panel',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styleUrls: [
    './sds-panel.style.css'
  ],
  template: `
    <div *ngFor="let panel of panels; let i=index" class="panel panel-success margin-20 row">
      <div class="panel-heading col-lg-12">
        <img [src]="image" class="col-lg-1 text-center padding-top-15" alt="image caption">
        <div class="col-lg-11" (click)="showPanel(i)">
          <h2><span class="glyphicon glyphicon-edit"></span> <strong>Title: </strong>{{panel.heading}}</h2>
          <h3><strong>Number: </strong>A number, 5</h3>
          <h3><strong>Detail: </strong>A detail about this item is this.</h3>
        </div>
      </div>
      <div class="panel-body col-lg-12" *ngIf="show===i">
        {{panel.body}}
      </div>
    </div>
    <div class="margin-bottom-20"></div>
  `
})
export class SDSPanelComponent {
  panels: {heading: string, body: string}[];
  image: string = "assets/img/angular-logo.png";
  show: number = -1;

  constructor() {
    this.panels = [
      {
        heading: "First Body",
        body: "First Body"
      },
      {
        heading: "Second Body",
        body: "Second Body"
      },
      {
        heading: "Third Body",
        body: "Third Body"
      },
      {
        heading: "Fourth Body",
        body: "Fourth Body"
      }
    ]
  }

  ngOnInit() {
    console.log('hello `Search` component');
  }

  showPanel(index) {
    if (this.show === index) {
      this.show = -1;
    } else {
      this.show = index;
    }
  }

}
