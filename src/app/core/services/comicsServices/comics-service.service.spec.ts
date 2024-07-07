import { TestBed } from '@angular/core/testing';

import { ComicsServiceService } from './comics-service.service';

describe('ComicsServiceService', () => {
  let service: ComicsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
