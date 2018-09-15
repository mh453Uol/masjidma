import { SalahModule } from './salah/salah.module';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateSliderComponent } from './date-slider/date-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    //DateSliderComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    SalahModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
