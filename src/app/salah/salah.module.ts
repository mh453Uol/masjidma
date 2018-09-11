import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSalahComponent } from './view-salah/view-salah.component';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    ViewSalahComponent
  ],
  exports: [
    ViewSalahComponent
  ]
})
export class SalahModule { }
