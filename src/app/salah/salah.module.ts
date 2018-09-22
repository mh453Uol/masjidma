import { SalahService } from './salah-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSalahComponent } from './view-salah/view-salah.component';
import { TooltipModule, PopoverModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DateSliderComponent } from './date-slider/date-slider.component';
import { CreateNonDailySalahComponent } from './create-non-daily-salah/create-non-daily-salah.component';
import { SalahFormComponent } from './salah-form/salah-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { YearlySalahFormComponent } from './yearly-salah-form/yearly-salah-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    TextMaskModule
  ],
  declarations: [
    ViewSalahComponent,
    DateSliderComponent,
    SalahFormComponent,
    CreateNonDailySalahComponent,
    YearlySalahFormComponent
  ],
  exports: [
    SalahFormComponent,
    ViewSalahComponent,
    DateSliderComponent,
    CreateNonDailySalahComponent,
    YearlySalahFormComponent
  ],
  providers: [
    SalahService
  ]
})
export class SalahModule { }
