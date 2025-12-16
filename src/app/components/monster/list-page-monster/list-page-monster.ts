import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import { InfoMonster} from '../../../common/interfaces';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-page-monster',
  standalone: true,
  imports: [
    NgbPagination,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './list-page-monster.html',
  styleUrl: './list-page-monster.css',
})
export class ListPageMonster implements OnInit{
  private readonly dataService: DataService = inject(DataService);

  monsterList: WritableSignal<InfoMonster[]>=signal<InfoMonster[]>([]);

  loaded = false;
  currentPage:number = 1;
  readonly totalItems:number = 1306;

  ngOnInit() {
    this.loadMonster()
  }

  private loadMonster() {
    this.loaded = false;
    this.dataService.getDataMonster(this.currentPage).subscribe(
      {
        next: (data: InfoMonster[]) => {
          console.log(data)
          this.monsterList.set(data);
          this.loaded = true;
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }

  pageChanged(event: number) {
    console.log(event)
    console.log(this.currentPage)
      console.log(this.currentPage)
      this.currentPage = event;
      this.loadMonster();

  }
}




