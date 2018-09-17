import { TimeValidator } from './../../shared/validation/time-validator';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-salah-form',
  templateUrl: './salah-form.component.html',
  styleUrls: ['./salah-form.component.css']
})
export class SalahFormComponent implements OnInit {

  @Input()
  month: number;

  @Input()
  year: number;

  form: FormGroup;

  public mask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      month: ['', Validators.required],
      salahs: this.fb.array(this.getSalahsForMonth())
    });
  }

  getSalahsForMonth(): FormGroup[] {
    const date = this.year + '-' + this.month;
    const days = moment(date, 'YYYY-MM').daysInMonth();
    const prayers = [];

    for (let i = 1; i <= days; i++) {
      prayers.push(this.fb.group({
        day: i,
        fajr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        sunrise: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        zuhr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        asr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        magrib: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        isha: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]]
      }));
    }
    return prayers;
  }

  get salahs(): FormArray {
    return this.form.get('salahs') as FormArray;
  }

  log() {
    console.log(this.form.get('salahs'));
  }

}
