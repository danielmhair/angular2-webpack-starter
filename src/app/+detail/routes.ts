import { Detail } from './detail.component';
import { Index } from './index.component';
import { Another } from "./another.component";

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'detail', component: Index,
  children: [
    { path: '', component: Detail, useDefault: true },
    { path: 'another', component: Another }
  ]
};
