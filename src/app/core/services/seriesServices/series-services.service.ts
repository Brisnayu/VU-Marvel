import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';

import { ApiResultSeries, ApiSeriesComics, Series, SeriesComics } from '../../models/series.model';
import { ApiResponse } from '../../models/apiResponse.model';
import { SeriesTransformer } from '../../helpers/series.helpers';

@Injectable({
  providedIn: 'root'
})
export class SeriesServices {
  private apiUrl: string = '';
  private transformer: SeriesTransformer;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environmentDevelop.UrlMarvel}series`;
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
    const apiUrl2 = `${environmentDevelop.UrlMarvel}series/${id}/comics`;

    return this.http.get<ApiResponse<ApiSeriesComics>>(apiUrl2, this.getHttpOptions()).pipe(
      map(apiResponse => this.transformer.transformApiSeriesComicsResponse(apiResponse))
    );
  }
}

