import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'search',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
    <div class="panel panel-primary">
     <div class="panel-heading">
        Heading
      </div>
      <div class="panel-body">
        Body
      </div>
    </div>
  `
})
export class Search {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Search` component');
  }

}
