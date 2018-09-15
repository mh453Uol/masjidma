import { TestBed, inject } from '@angular/core/testing';

import { SalahServiceService } from './salah-service.service';

describe('SalahServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalahServiceService]
    });
  });

  it('should be created', inject([SalahServiceService], (service: SalahServiceService) => {
    expect(service).toBeTruthy();
  }));
});
