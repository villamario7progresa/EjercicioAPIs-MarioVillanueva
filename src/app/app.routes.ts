import { Routes } from '@angular/router';
import {ListPage} from './components/pokemon/list-page-pokemon/list-page';
import {DetailPage} from './components/pokemon/detail-page-pokemon/detail-page';
import {Home} from './components/home/home';
import {DetailPageMonster} from './components/monster/detail-page-monster/detail-page-monster';
import {ListPageMonster} from './components/monster/list-page-monster/list-page-monster';
import {ListPageValorant} from './components/valorant/list-page-valorant/list-page-valorant';
import {DetailPageValorant} from './components/valorant/detail-page-valorant/detail-page-valorant';
import {ListPageFinal} from './components/final/list-page-final/list-page-final';
import {DetailPageFinal} from './components/final/detail-page-final/detail-page-final';

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
    component: DetailPageMonster
  },
  {
    path: 'valorant/list',
    component: ListPageValorant
  },
  {
    path: 'valorant/detail/:id',
    component: DetailPageValorant
  },
  {
    path: 'final/list',
    component: ListPageFinal
  },
  {
    path: 'final/detail/:id',
    component: DetailPageFinal
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
