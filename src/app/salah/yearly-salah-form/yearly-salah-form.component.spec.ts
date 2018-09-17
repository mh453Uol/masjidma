import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySalahFormComponent } from './yearly-salah-form.component';

describe('YearlySalahFormComponent', () => {
  let component: YearlySalahFormComponent;
  let fixture: ComponentFixture<YearlySalahFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlySalahFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlySalahFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
