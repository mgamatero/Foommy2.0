import { TestBed } from '@angular/core/testing';

import { NonLoggedOnDataService } from './non-logged-on-data.service';

describe('NonLoggedOnDataService', () => {
  let service: NonLoggedOnDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonLoggedOnDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
