import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {ApiValorantResponse, InfoValorant} from '../../../common/interfaces';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-page-valorant',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-page-valorant.html',
  styleUrl: './list-page-valorant.css',
})
export class ListPageValorant implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  ValorantList: InfoValorant[]=[]
  loaded = false;

  ngOnInit() {
    this.loadValorant()
  }

  private loadValorant() {
    this.dataService.getDataValorant().subscribe({
      next: data => {
        this.ValorantList = data.data;
        this.loaded = true;
      },
      error: err => {
        console.log(err);
        this.loaded = true;
      }
    });
  }
}
