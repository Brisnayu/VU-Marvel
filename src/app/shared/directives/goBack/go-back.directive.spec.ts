import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { GoBackDirective } from './go-back.directive';

describe('GoBackDirective', () => {
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Location]
    });
    location = TestBed.inject(Location);
  });

  it('should create an instance', () => {
    const directive = new GoBackDirective(location);
    expect(directive).toBeTruthy();
  });

});


