import {Component, inject, Input} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {InfoMonster, } from '../../../common/interfaces';

@Component({
  selector: 'app-detail-page-pokemon-monster',
  imports: [],
  templateUrl: './detail-page-monster.html',
  styleUrl: './detail-page-monster.css',
})
export class DetailPageMonster {
  @Input('id') id!: number;
  private readonly  dataService : DataService = inject(DataService);
  monster! : InfoMonster;

  ngOnInit() {
    this.loadMonster()
  }

  private loadMonster() {
    this.dataService.getOneMonster(this.id).subscribe(
      {
        next: data => {
          this.monster = data;
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }
}
