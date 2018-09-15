import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css']
})
export class DateSliderComponent implements OnInit {

  @Input('today')
  today: moment.Moment;
  date: string;
  @Output('change')
  change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.today = moment();
    this.formatDate();
  }

  tomorrow() {
    this.today.add(1, 'days').calendar();
    this.formatDate();
    this.onChange();
  }

  yesterday() {
    this.today.subtract(1, 'days').calendar();
    this.formatDate();
    this.onChange();
  }

  formatDate() {
    this.date = this.today.format('dddd, ll');
  }

  onChange() {
    this.change.emit({ date: this.today });
  }

  log() {
    console.log(this.date);
  }
}
