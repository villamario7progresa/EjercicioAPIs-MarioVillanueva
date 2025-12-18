import {Component, inject, Input, OnInit} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {InfoFinal} from '../../../common/interfaces';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-detail-page-final',
  imports: [
  ],
  templateUrl: './detail-page-final.html',
  styleUrl: './detail-page-final.css',
})
export class DetailPageFinal implements OnInit {
  @Input('id') id!: string;
  private readonly  dataService : DataService = inject(DataService);
  final! : InfoFinal;

  ngOnInit() {
    this.loadFinal()
  }

  private loadFinal() {
    this.dataService.getOneFinal(this.id).subscribe(
      {
        next: (res: any) => {
          this.final = res;
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }
}
