import { Component } from '@angular/core';

@Component({
  selector: 'basic-search',
  template: `
    <h1>Basic Search</h1>
  `
})
export class BasicSearchComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Basic Search` component');
  }
}
