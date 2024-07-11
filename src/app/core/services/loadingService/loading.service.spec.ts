import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be show loader return true', () => {
    service.showLoader();
    expect(service.isLoading).toBeTrue()
  });

  it('should be hide loader return false', () => {
    service.showLoader();
    service.hideLoader();
    expect(service.isLoading).toBeFalse()
  });

  it('should be initially be not loading', () => {
    expect(service.isLoading).toBeFalse();
  });
});
