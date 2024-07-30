import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('authInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      switch (key) {
        case 'hash': return 'mockedHash';
        case 'public_key': return 'mockedPublicKey';
        default: return null;
      }
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add auth params when localStorage contains hash and public_key', () => {
    httpClient.get('/test').subscribe();

    const httpRequest = httpMock.expectOne((req) => 
      req.params.has('ts') && 
      req.params.has('apikey') && 
      req.params.has('hash')
    );

    expect(httpRequest.request.params.get('ts')).toBe('1');
    expect(httpRequest.request.params.get('apikey')).toBe('mockedPublicKey');
    expect(httpRequest.request.params.get('hash')).toBe('mockedHash');

    httpRequest.flush({});
  });

  it('should not add auth params when localStorage does not contain hash and public_key', () => {
    (localStorage.getItem as jasmine.Spy).and.callFake((key: string) => null);

    httpClient.get('/test').subscribe();

    const httpRequest = httpMock.expectOne((req) => 
      !req.params.has('ts') && 
      !req.params.has('apikey') && 
      !req.params.has('hash')
    );

    httpRequest.flush({});
  });
});
