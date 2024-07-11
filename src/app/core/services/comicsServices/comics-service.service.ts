import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environment.development';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResultComics, Comics } from '../../models/comics.model';
import { ApiResponse } from '../../models/apiResponse.model';
import { ComicsTransformer } from '../../helpers/comics.helpers';

@Injectable({
  providedIn: 'root'
})
export class ComicsServiceService {
  private transformer: ComicsTransformer;

  constructor(private http: HttpClient) {
    this.transformer = new ComicsTransformer(); 
  }

  private getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getComicsById(id: number): Observable<Comics[]> {
    const apiComics = `${environmentDevelop.UrlMarvel}comics/${id}`;

    return this.http.get<ApiResponse<ApiResultComics>>(apiComics, this.getHttpOptions()).pipe(
      map(apiComicsResponse => this.transformer.transformApiComicsResponse(apiComicsResponse)),
      catchError(error => {
        console.error('Error HTTP: ', error);
        return throwError(() => error);
      }) 
    );
  }
}

