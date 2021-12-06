import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../apiConfig/api.config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = environment.api_url;
  private search$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, @Inject(API_CONFIG_TOKEN) private apiConfig) { }

  getSearch(): Observable<string> {
    return this.search$.asObservable();
  }

  setSearch(value: string): void {
    this.search$.next(value);
  }

  getSearchByKey(value: string): Observable<any> {
    const url = `${this.apiUrl}${this.apiConfig.SEARCH_SHOWS}${value}`;
    return this.http.get(url).pipe(
      map((results: any) => {
        return results.map( (show: any) => ({...show.show}));
      })
    );
  }

  getShow(): Observable<any> {
    const url = `${this.apiUrl}${this.apiConfig.SHOWS}`;
    return this.http.get(url);
  }

  getShowCrewCastDetails(showId: number): Observable<any> {
    const url = `${this.apiUrl}${this.apiConfig.SHOWS}/${showId}${this.apiConfig.CREW_CAST_SEASON_DETAILS}`;
    return this.http.get(url);
  }
}
