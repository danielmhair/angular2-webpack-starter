import { Component } from '@angular/core';

@Component({
  selector: 'another',

  template: `
    <h1>Hello from Another</h1>
  `
})
export class Another {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Another` component');
  }
}
