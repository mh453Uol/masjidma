import { SalahService } from './salah-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSalahComponent } from './view-salah/view-salah.component';
import { TooltipModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DateSliderComponent } from './date-slider/date-slider.component';
import { CreateNonDailySalahComponent } from './create-non-daily-salah/create-non-daily-salah.component';
import { SalahFormComponent } from './salah-form/salah-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeInputDirective } from './time-input.directive';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TextMaskModule
  ],
  declarations: [
    TimeInputDirective,
    ViewSalahComponent,
    DateSliderComponent,
    SalahFormComponent,
    CreateNonDailySalahComponent
  ],
  exports: [
    SalahFormComponent,
    ViewSalahComponent,
    DateSliderComponent,
    CreateNonDailySalahComponent
  ],
  providers: [
    SalahService
  ]
})
export class SalahModule { }
