export { BasicSearchComponent } from './basic.component';
export { AdvancedSearchComponent } from './advanced.component';
export { BarcodeSearchComponent } from './barcode.component';
export { Search } from './search.component';

console.log('`Detail` bundle loaded asynchronously');
// Must be exported for WebpackAsyncRoute
export * from './routes';
