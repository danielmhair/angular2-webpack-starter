import { Component } from '@angular/core';
import { SDSPanelComponent } from "../sds-panel";

@Component({
  selector: 'advanced-search',
  template: `
    <h1>Advanced Search</h1>
    <sds-panel></sds-panel>
  `,
  directives: [SDSPanelComponent]
})
export class AdvancedSearchComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Advanced Search` component');
  }
}
