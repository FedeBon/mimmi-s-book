import { TestBed } from '@angular/core/testing';

import { ServiceExternalService } from './service-external.service';

describe('ServiceExternalService', () => {
  let service: ServiceExternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
