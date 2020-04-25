import { TestBed } from '@angular/core/testing';

import { FoommyService } from './foommy.service';

describe('FoommyService', () => {
  let service: FoommyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoommyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
