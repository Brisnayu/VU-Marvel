import { TestBed } from '@angular/core/testing';

import { SeriesServices } from './series-services.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Series } from '../../models/series.model';
import { environmentDevelop } from '../../../../environments/environment.development';
import { ApiResponse } from '../../models/apiResponse.model';

describe('SeriesServicesService', () => {
  let service: SeriesServices;
  let httpCtrl: HttpTestingController;

  const httpMock: ApiResponse<Series> = {
    code: 2,
    status: "string",
    data: {
      results:
        [
          {
            id: 3,
            title: "title",
            startYear: 2,
            endYear: 3,
            thumbnail: "imagen1",
            comics: {
              id: 2,
              title: "title",
              modified: "string",
              thumbnail: "string",
            }
          },
          {
            id: 4,
            title: "title",
            startYear: 2,
            endYear: 3,
            thumbnail: "imagen1",
            comics: {
              id: 2,
              title: "title",
              modified: "string",
              thumbnail: "string",
            }
          },
        ]
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeriesServices]
    });
    service = TestBed.inject(SeriesServices);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response API series', () => {
    service.getSeries().subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThan(1)
      }
    });

    const mockHttp = httpCtrl.expectOne(`${environmentDevelop.UrlMarvel}series`);
    expect(mockHttp.request.method).toEqual('GET');
    mockHttp.flush(httpMock)
  });

  it('should return error API series', () => {
    service.getSeries().subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(401);
      }
    });

    const mockHttp = httpCtrl.expectOne(`${environmentDevelop.UrlMarvel}series`);
    
    mockHttp.flush('Error request', { status: 401, statusText: 'Unathorized acces'})
  });

  it('should return response API Comics of Series', () => {
    service.getComicsOfSeries(1).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThan(0)
      }
    });

    const mockHttp = httpCtrl.expectOne(`${environmentDevelop.UrlMarvel}series/1/comics`);
    expect(mockHttp.request.method).toEqual('GET');
    mockHttp.flush(httpMock)
  });


});
