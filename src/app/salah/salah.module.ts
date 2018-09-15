import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSalahComponent } from './view-salah/view-salah.component';
import { TooltipModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DateSliderComponent } from './date-slider/date-slider.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    ViewSalahComponent,
    DateSliderComponent
  ],
  exports: [
    ViewSalahComponent,
    DateSliderComponent
  ]
})
export class SalahModule { }
