export { Detail } from './detail.component';
export { Index } from './index.component';
export { Another } from './another.component';

console.log('`Detail` bundle loaded asynchronously');
// Must be exported for WebpackAsyncRoute
export * from './routes';
