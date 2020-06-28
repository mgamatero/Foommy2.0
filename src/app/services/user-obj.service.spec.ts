import { TestBed } from '@angular/core/testing';

import { UserObjService } from './user-obj.service';

describe('UserObjService', () => {
  let service: UserObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
