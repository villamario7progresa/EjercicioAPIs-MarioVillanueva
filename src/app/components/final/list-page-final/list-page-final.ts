import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DataService} from '../../../services/data-service';
import {InfoFinal} from '../../../common/interfaces';

@Component({
  selector: 'app-list-page-final',
  imports: [
    RouterLink
  ],
  templateUrl: './list-page-final.html',
  styleUrl: './list-page-final.css',
})
export class ListPageFinal {
  private readonly dataService: DataService = inject(DataService);
  FinalList: InfoFinal[]=[]
  loaded = false;

  ngOnInit() {
    this.loadFinal()
  }

  private loadFinal() {
    this.dataService.getDataFinal().subscribe({
      next: data => {
        this.FinalList = data;
        this.loaded = true;
      },
      error: err => {
        console.log(err);
        this.loaded = true;
      }
    });
  }
}
