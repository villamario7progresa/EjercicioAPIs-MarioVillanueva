import {Component, inject, Input} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {InfoMonster, InfoValorant} from '../../../common/interfaces';

@Component({
  selector: 'app-detail-page-valorant',
  imports: [],
  templateUrl: './detail-page-valorant.html',
  styleUrl: './detail-page-valorant.css',
})
export class DetailPageValorant {
  @Input('id') id!: string;
  private readonly  dataService : DataService = inject(DataService);
  valorant! : InfoValorant;

  ngOnInit() {
    this.loadValorant()
  }

  private loadValorant() {
    this.dataService.getOneVAlorant(this.id).subscribe(
      {
        next: (res: any) => {
          this.valorant = res.data;
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }
}
