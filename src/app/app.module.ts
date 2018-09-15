import { SalahModule } from './salah/salah.module';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
