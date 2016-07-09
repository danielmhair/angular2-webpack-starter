import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'search',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
    <md-card *ngFor="let panel of panels; let i=index" class="panel panel-primary margin-20">
     <md-card-title class="panel-heading" (click)="showPanel(i)">
        {{panel.heading}}
      </md-card-title>
      <md-card-content class="panel-body" *ngIf="show===i">
        {{panel.body}}
      </md-card-content>
    </md-card>
    
    <md-card class="panel panel-primary margin-20 row">
      <img [src]="image" class="md-card-image col-lg-1" alt="image caption">
      <md-card-content class="col-lg-11">
       <h2 class="panel-heading">Card headline</h2>
       <p class="panel-body">Card content</p>
      </md-card-content>
    </md-card>
  `
})
export class Search {
  panels: Array<{heading: string, body: string}>;
  image: string = "assets/img/angular-logo.png";
  show: number = 0;

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
    this.show = index;
  }

}
