/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Link } from "./bootstrap-navbar/Link";
import { BootstrapNavbarComponent } from "./bootstrap-navbar/bootstrap-navbar.component";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css',
    './font-size.css',
    './margin-padding.css',
    './width.css',
    './styles.css',
  ],
  directives: [BootstrapNavbarComponent],
  template: `
    <md-content>
      <bootstrap-navbar [leftLinks]="leftLinks" [rightLinks]="rightLinks" [brand]="brand"></bootstrap-navbar>
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>
      <router-outlet></router-outlet>
    </md-content>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  rightLinks: Link[] = [
    new Link("Basic Search", "glyphicon glyphicon-search", null, '/search/basic', {}),
    new Link("Advanced Search", "glyphicon glyphicon-search", null, '/search/advanced', {}),
    new Link("BarcodeSearch", "glyphicon glyphicon-search", null, '/search/barcode', {}),
  ];

  leftLinks: Link[] = [
    new Link("About", "glyphicon glyphicon-user", null, '/about', {}),
  ];

  brand: Link = new Link("Angular 2 Template", "glyphicon glyphicon-dashboard", null, './', {});

  constructor() {}

  ngOnInit() {
    console.log('App');
  }

}
