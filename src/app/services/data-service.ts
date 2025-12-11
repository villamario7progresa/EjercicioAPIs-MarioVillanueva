import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiPokemonResponse, InfoPKM} from '../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly  httpClient : HttpClient = inject(HttpClient);
  private readonly urlBase='https://api.pokemontcg.io/v2/cards';

  getDataPKM(page:number) : Observable<ApiPokemonResponse>{
    return this.httpClient.get<ApiPokemonResponse>(
      this.urlBase+'?page=1&pageSize='+ page
    )
  }

  getOneCard(id:number): Observable<InfoPKM>{
    return  this.httpClient.get<InfoPKM>(
      this.urlBase+id
    )
  }

}
