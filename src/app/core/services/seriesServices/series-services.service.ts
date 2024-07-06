import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { Series } from '../../models/series/series.model';
import { ApiSeriesResponse } from '../../models/series/api-series.model';
import { transformApiSeriesResponse } from '../../helpers/series.helpers';

@Injectable({
  providedIn: 'root'
})
export class SeriesServices {

  constructor(private http: HttpClient) { }

  getSeries(publicKey: string, hash: string): Observable<Series[]> {
    const API_URL_SERIES = `${environmentDevelop.UrlMarvel}v1/public/series?ts=1&apikey=${publicKey}&hash=${hash}`

    return this.http.get<ApiSeriesResponse>(API_URL_SERIES, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map((apiSeriesResponse) => transformApiSeriesResponse(apiSeriesResponse))
    )
  }
}
