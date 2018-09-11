import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalahComponent } from './view-salah.component';

describe('ViewSalahComponent', () => {
  let component: ViewSalahComponent;
  let fixture: ComponentFixture<ViewSalahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSalahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
