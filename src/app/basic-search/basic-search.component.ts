import { Component } from '@angular/core';
import { SDSPanelComponent } from "../sds-panel";

@Component({
  selector: 'basic-search',
  template: `
    <h1>Basic Search</h1>
    <sds-panel></sds-panel>
  `,
  directives: [SDSPanelComponent]
})
export class BasicSearchComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Basic Search` component');
  }
}
