import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiMonsterResponse, ApiPokemonResponse, InfoMonster, InfoPKM} from '../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly  httpClient : HttpClient = inject(HttpClient);
  private readonly urlBase='https://api.pokemontcg.io/v2/cards';
  public readonly cardBackUrl ='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_759,h_1053/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiIvZi80Zjc3MDVlYy04YzQ5LTRlZWQtYTU2ZS1jMjFmMzk4NTI1NGMvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.364HskpTM11MwvEzmMXHqIkEbcA318yjhAaLQ9LsH0E';

  getDataPKM(page:number) : Observable<ApiPokemonResponse>{
    return this.httpClient.get<ApiPokemonResponse>(
      this.urlBase+'?page='+page+'&pageSize=20'
    )
  }

  getOneCard(id:number): Observable<InfoPKM>{
    return  this.httpClient.get<InfoPKM>(
      this.urlBase+id
    )
  }


  private readonly urlBaseMonster = 'https://mhw-db.com/weapons/';

  private readonly pageSize = 20;


  getDataMonster(page: number) {
    const min = (page - 1) * 20 + 1;
    const max = page * 20;
    console.log(page,min,max);
    const query = `{"id":{"$gte":${min},"$lte":${max}}}`;
    const url = 'https://mhw-db.com/weapons?q=' + query;
    return this.httpClient.get<InfoMonster[]>(url);
  }

  getOneMonster(id: number): Observable<InfoMonster> {
    return this.httpClient.get<InfoMonster>(
      this.urlBaseMonster + id
    );
  }
}







