import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {ApiPokemonResponse, InfoPKM} from '../../../common/interfaces';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-page-pokemon',
  imports: [
    NgbPagination,
    RouterLink
  ],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  apiData!: ApiPokemonResponse;
  cardList: WritableSignal<InfoPKM[]>=signal<InfoPKM[]>([]);
  loaded = false;
  currentPage:number = 1;

  public readonly cardBackUrl = this.dataService.cardBackUrl;

ngOnInit() {
  this.loadCards()
}

  private loadCards() {
    this.dataService.getDataPKM(this.currentPage).subscribe(
      {
        next: data => {
          this.apiData = data;
          this.cardList.set(data.data);
          this.loaded = true;
        },
        error: err => {
         console.log(err);
        }
      }
    )
  }

  pageChanged(event: number) {
    this.currentPage = event;
    this.loadCards();
  }
}
