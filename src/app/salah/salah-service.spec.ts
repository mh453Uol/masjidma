import { SalahService } from './salah-service';
import { TestBed, inject } from '@angular/core/testing';

describe('SalahServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalahService]
    });
  });

  it('should be created', inject([SalahService], (service: SalahService) => {
    expect(service).toBeTruthy();
  }));
});
