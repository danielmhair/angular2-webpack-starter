import { Component } from '@angular/core';

@Component({
  selector: 'barcode-search',
  template: `
    <h1>Barcode Search</h1>
  `
})
export class BarcodeSearchComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `barcode-search` component');
  }
}
