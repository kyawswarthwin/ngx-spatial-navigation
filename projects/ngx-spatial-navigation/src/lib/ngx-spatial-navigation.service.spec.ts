import { TestBed } from '@angular/core/testing';

import { NgxSpatialNavigationService } from './ngx-spatial-navigation.service';

describe('NgxSpatialNavigationService', () => {
  let service: NgxSpatialNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSpatialNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
