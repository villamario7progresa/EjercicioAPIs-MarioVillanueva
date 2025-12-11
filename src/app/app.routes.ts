import { Routes } from '@angular/router';
import * as path from 'node:path';
import {ListPage} from './components/web/list-page/list-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards/list',
    pathMatch: 'full'
  },
  {
    path: 'cards/list',
    component: ListPage
  },
  {
    path: 'cards/detail/:id',
    component: DetailPage
  },
  {
    path: '**',
    redirectTo: 'cards/list',
    pathMatch: 'full'
  }
];
