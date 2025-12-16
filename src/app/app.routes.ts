import { Routes } from '@angular/router';
import {ListPage} from './components/pokemon/list-page/list-page';
import {DetailPage} from './components/pokemon/detail-page/detail-page';
import {Home} from './components/home/home';
import {DetailPageMosnter} from './components/monster/detail-page-mosnter/detail-page-mosnter';
import {ListPageMonster} from './components/monster/list-page-monster/list-page-monster';

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
    path: 'monster/list',
    component: ListPageMonster
  },
  {
    path: 'monster/detail/:id',
    component: DetailPageMosnter
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
