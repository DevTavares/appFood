import { TestBed } from '@angular/core/testing';

import { MainProfileService } from './main-profile.service';

describe('MainProfileService', () => {
  let service: MainProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
