import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { environmentDevelop } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';

import { ApiResultComics, Comics } from '../../models/comics.model';
import { transformApiComicsResponse } from '../../helpers/comics.helpers';
import { ApiResponse } from '../../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsServiceService {
  private publicKey: string = '';
  private marvelHash: string = '';


  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.publicKey = this.localStorageService.getItem('Public_key') || '';
    this.marvelHash = this.localStorageService.getItem('MarvelHash') || '';

  }

  private getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getComicsById(id: number): Observable<Comics[]> {
    const apiComics = `${environmentDevelop.UrlMarvel}v1/public/comics/${id}?ts=1&apikey=${this.publicKey}&hash=${this.marvelHash}`;

    return this.http.get<ApiResponse<ApiResultComics>>(apiComics, this.getHttpOptions()).pipe(
      map(apiComicsResponse => transformApiComicsResponse(apiComicsResponse))
    );
  }

}
