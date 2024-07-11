import { TestBed } from '@angular/core/testing';

import { ComicsServiceService } from './comics-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Comics } from '../../models/comics.model';
import { ApiResponse } from '../../models/apiResponse.model';
import { environmentDevelop } from '../../../../environments/environment.development';

describe('ComicsServiceService', () => {
  let service: ComicsServiceService;
  let httpCtrl: HttpTestingController;

  const httpMock: ApiResponse<Comics> = {
    code: 2,
    status: "string",
    data: {
      results:
        [
          {
            id: 3,
            title: "title",
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            modified: "24/01/2024",
            thumbnail: "imagen1",
          },
          {
            id: 4,
            title: "title",
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            modified: "24/01/2024",
            thumbnail: "imagen1",
          }
        ]
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComicsServiceService]
    });
    service = TestBed.inject(ComicsServiceService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response API comics', () => {
    service.getComicsById(1).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThan(1)
      }
    });

    const mockHttp = httpCtrl.expectOne(`${environmentDevelop.UrlMarvel}comics/${1}`);
    expect(mockHttp.request.method).toEqual('GET');
    mockHttp.flush(httpMock)
  });

  it('should return error API comics', () => {
    service.getComicsById(1).subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(401);
      }
    });

    const mockHttp = httpCtrl.expectOne(`${environmentDevelop.UrlMarvel}comics/${1}`);
    
    mockHttp.flush('Error request', { status: 401, statusText: 'Unathorized acces'})
  });
});
