import {Component, inject, Input, OnInit} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {InfoPKM} from '../../../common/interfaces';

@Component({
  selector: 'app-detail-page-pokemon',
  imports: [],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage implements OnInit {
@Input('id') id!: number;
private readonly  dataService : DataService = inject(DataService);
card! : InfoPKM;

  ngOnInit() {
    this.loadcard()
  }

  private loadcard() {
    this.dataService.getOneCard(this.id).subscribe(
      {
        next: data => {
          this.card = data;
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }
}
