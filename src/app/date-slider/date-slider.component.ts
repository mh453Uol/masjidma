import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css']
})
export class DateSliderComponent implements OnInit {

  public today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

  tomorrow() {
    this.today.setDate(this.today.getDate() + 1);
  }

  yesterday() {
    this.today.setDate(this.today.getDate() - 1);
  }
}
