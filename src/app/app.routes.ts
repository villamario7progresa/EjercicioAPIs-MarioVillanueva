import { Routes } from '@angular/router';
import {ListPage} from './components/web/list-page/list-page';
import {DetailPage} from './components/web/detail-page/detail-page';
import {Home} from './components/web/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
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
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
