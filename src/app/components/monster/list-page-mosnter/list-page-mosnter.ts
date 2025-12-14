import {Component, inject, signal, WritableSignal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import { InfoMonster} from '../../../common/interfaces';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-page-mosnter',
  standalone: true,
  imports: [
    NgbPagination,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './list-page-mosnter.html',
  styleUrl: './list-page-mosnter.css',
})
export class ListPageMosnter {
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
    if (event !== this.currentPage && event > 0) {
      this.currentPage = event;
      this.loadMonster();
    }
  }
}




