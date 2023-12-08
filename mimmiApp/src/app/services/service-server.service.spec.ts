import { TestBed } from '@angular/core/testing';

import { ServiceServerService } from './service-server.service';

describe('ServiceServerService', () => {
  let service: ServiceServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
