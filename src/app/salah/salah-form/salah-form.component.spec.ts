import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalahFormComponent } from './salah-form.component';


describe('CreateSalahComponent', () => {
  let component: SalahFormComponent;
  let fixture: ComponentFixture<SalahFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SalahFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalahFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
