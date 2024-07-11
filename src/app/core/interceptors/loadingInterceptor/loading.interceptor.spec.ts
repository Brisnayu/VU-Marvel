import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from '../../services/loadingService/loading.service';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loadingService: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    const loadingServiceSpy = jasmine.createSpyObj('LoadingService', ['showLoader', 'hideLoader']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        { provide: LoadingService, useValue: loadingServiceSpy }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    loadingService = TestBed.inject(LoadingService) as jasmine.SpyObj<LoadingService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call showLoader and hideLoader when X-LOADING header is not "false"', () => {
    httpClient.get('/test').subscribe();

    const httpRequest = httpMock.expectOne('/test');
    httpRequest.flush({});

    expect(loadingService.showLoader).toHaveBeenCalled();
    expect(loadingService.hideLoader).toHaveBeenCalled();
  });

  it('should not call showLoader and hideLoader when X-LOADING header is "false"', () => {
    httpClient.get('/test', { headers: { 'X-LOADING': 'false' } }).subscribe();

    const httpRequest = httpMock.expectOne('/test');
    httpRequest.flush({});

    expect(loadingService.showLoader).not.toHaveBeenCalled();
    expect(loadingService.hideLoader).not.toHaveBeenCalled();
  });
});
