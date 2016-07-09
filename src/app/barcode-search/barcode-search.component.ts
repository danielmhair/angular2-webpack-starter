import { Component } from '@angular/core';
import { BarcodePanelComponent } from "../barcode-panel";

@Component({
  selector: 'barcode-search',
  template: `
    <h1>Barcode Search</h1>
    <barcode-panel></barcode-panel>
  `,
  directives: [BarcodePanelComponent]
})
export class BarcodeSearchComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `barcode-search` component');
  }
}
