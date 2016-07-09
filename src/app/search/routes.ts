import { Search } from "./search.component";
import { BasicSearchComponent } from './basic.component';
import { AdvancedSearchComponent } from './advanced.component';
import { BarcodeSearchComponent } from './barcode.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'search', component: Search,
  children: [
    { path: 'basic', component: BasicSearchComponent, useDefault: true },
    { path: 'advanced', component: AdvancedSearchComponent },
    { path: 'barcode', component: BarcodeSearchComponent }
  ]
};
