import { SalahModule } from './salah.module';

describe('SalahModule', () => {
  let salahModule: SalahModule;

  beforeEach(() => {
    salahModule = new SalahModule();
  });

  it('should create an instance', () => {
    expect(salahModule).toBeTruthy();
  });
});
