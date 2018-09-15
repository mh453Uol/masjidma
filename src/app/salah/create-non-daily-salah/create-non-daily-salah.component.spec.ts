import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNonDailySalahComponent } from './create-non-daily-salah.component';

describe('CreateNonDailySalahComponent', () => {
  let component: CreateNonDailySalahComponent;
  let fixture: ComponentFixture<CreateNonDailySalahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNonDailySalahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNonDailySalahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
