import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css']
})
export class DateSliderComponent implements OnInit {

  today: moment.Moment;
  date: string;

  constructor() { }

  ngOnInit() {
    this.today = moment();
    this.formatDate();
  }

  tomorrow() {
    this.today.add(1, 'days').calendar();
    this.formatDate();
  }

  yesterday() {
    this.today.subtract(1, 'days').calendar();
    this.formatDate();
  }

  formatDate() {
    this.date = this.today.format('dddd, ll');
  }

  log() {
    console.log('Working');
  }
}
