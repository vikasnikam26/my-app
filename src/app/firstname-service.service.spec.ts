import { TestBed } from '@angular/core/testing';

import { FirstnameServiceService } from './firstname-service.service';

describe('FirstnameServiceService', () => {
  let service: FirstnameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstnameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
