import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-yearly-salah-form',
  templateUrl: './yearly-salah-form.component.html',
  styleUrls: ['./yearly-salah-form.component.css']
})
export class YearlySalahFormComponent implements OnInit {

  year: number;
  selectedMonth: number;

  constructor() {
    this.year = moment().year();
    this.selectedMonth = 1;
  }

  ngOnInit() {
  }

  onTabClicked(month: number) {
    this.selectedMonth = month;
    console.log(month);
  }

}
