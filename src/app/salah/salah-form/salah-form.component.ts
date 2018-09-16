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

  public mask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      month: ['', Validators.required],
      salahs: this.fb.array(this.getSalahsForMonth())
    });

    console.log(this.form);
  }

  getSalahsForMonth(): FormGroup[] {
    const date = this.year + '-' + this.month;
    const days = moment(date, 'YYYY-MM').daysInMonth();
    const prayers = [];

    for (let i = 1; i <= days; i++) {
      prayers.push(this.fb.group({
        day: i,
        month: this.month,
        fajr: '',
        sunrise: '',
        zuhr: '',
        asr: '',
        magrib: '',
        isha: ''
      }));
    }
    return prayers;
  }

  get salahs(): FormArray {
    return this.form.get('salahs') as FormArray;
  }



}
