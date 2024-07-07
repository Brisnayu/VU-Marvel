import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';

import { LocalStorageService } from '../localStorage/local-storage.service';
import { ApiResultSeries, ApiSeriesComics, Series, SeriesComics } from '../../models/series.model';
import { ApiResponse } from '../../models/apiResponse.model';
import { SeriesTransformer } from '../../helpers/series.helpers';

@Injectable({
  providedIn: 'root'
})
export class SeriesServices {
  private publicKey: string = '';
  private marvelHash: string = '';
  private apiUrl: string = '';
  private transformer: SeriesTransformer;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.publicKey = this.localStorageService.getItem('Public_key') || '';
    this.marvelHash = this.localStorageService.getItem('MarvelHash') || '';
    this.apiUrl = `${environmentDevelop.UrlMarvel}series?ts=1&apikey=${this.publicKey}&hash=${this.marvelHash}`;
    this.transformer = new SeriesTransformer();
  }

  private getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getSeries(): Observable<Series[]> {
    return this.http.get<ApiResponse<ApiResultSeries>>(this.apiUrl, this.getHttpOptions()).pipe(
      map(apiSeriesResponse => this.transformer.transformApiSeriesResponse(apiSeriesResponse))
    );
  }

  getComicsOfSeries(id: number): Observable<SeriesComics[]> {
    const apiUrl2 = `${environmentDevelop.UrlMarvel}series/${id}/comics?ts=1&apikey=${this.publicKey}&hash=${this.marvelHash}`;

    return this.http.get<ApiResponse<ApiSeriesComics>>(apiUrl2, this.getHttpOptions()).pipe(
      map(apiResponse => this.transformer.transformApiSeriesComicsResponse(apiResponse))
    );
  }
}

