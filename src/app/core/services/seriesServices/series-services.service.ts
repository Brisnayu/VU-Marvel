import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { DataApi, Series, SeriesComics } from '../../models/series/series.model';
import { ApiSeriesResponse } from '../../models/series/api-series.model';
import { transformApiSeriesResponse } from '../../helpers/series.helpers';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesServices {
  private publicKey: string = '';
  private marvelHash: string = '';
  private apiUrl: string = '';


  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.publicKey = this.localStorageService.getItem('Public_key') || '';
    this.marvelHash = this.localStorageService.getItem('MarvelHash') || '';
    this.apiUrl = `${environmentDevelop.UrlMarvel}v1/public/series?ts=1&apikey=${this.publicKey}&hash=${this.marvelHash}`;
  }

  private getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getSeries(): Observable<Series[]> {
    return this.http.get<ApiSeriesResponse>(this.apiUrl, this.getHttpOptions()).pipe(
      map(apiSeriesResponse => transformApiSeriesResponse(apiSeriesResponse))
    );
  }

  getComicsOfSeries(id: number): Observable<SeriesComics[]> {
    const apiUrl2 = `${environmentDevelop.UrlMarvel}v1/public/series/${id}/comics?ts=1&apikey=${this.publicKey}&hash=${this.marvelHash}`;

    return this.http.get<DataApi<SeriesComics>>(apiUrl2).pipe(
      map(apiSeriesResponse => apiSeriesResponse.data.results)
    );
  }
}
