import { SalahService } from './../salah-service';
import { TimeValidator } from './../../shared/validation/time-validator';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { TabHeadingDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-salah-form',
  templateUrl: './salah-form.component.html',
  styleUrls: ['./salah-form.component.css']
})
export class SalahFormComponent implements OnInit, OnChanges {

  @Input()
  month: number;

  @Input()
  year: number;

  @Input()
  loadData = false;

  form: FormGroup;
  mask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
  isLoading = false;

  private _doubleClickedInput;
  private _organisationId = 1;

  constructor(private fb: FormBuilder,
    private salahService: SalahService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      month: [this.month, Validators.required],
      salahs: this.fb.array(this.getNumberOfSalahsForTheMonth())
    });
  }

  get salahs(): FormArray {
    return this.form.get('salahs') as FormArray;
  }

  // ngOnChange is triggered when input properties are changed. So in the parent
  // parent component (yearly salah) when the user click the month tab we want 
  // to get data then.
  ngOnChanges(changes: SimpleChanges) {
    if (changes.loadData) {
      if (changes.loadData.currentValue) {
        this.isLoading = true;
        //get monthly salah for the month when the tab is clicked
        this.salahService.getMonthlySalahs(this.month, this._organisationId)
          .subscribe(
            data => {
              this.updateFormWithMonthlySalahs(data);
            },
            error => { alert('Couldnt get monthly salahs'); },
            () => { this.isLoading = false; }
          );
      }
    }
  }

  updateFormWithMonthlySalahs(monthlySalahs) {
    console.log('Updating form with latest data', monthlySalahs);
    for (let i = 0; i < monthlySalahs.prayerTimes.length; i++) {

      this.salahs.at(i).patchValue({
        fajr: monthlySalahs.prayerTimes[i].jamaatTimes.fajr,
        zuhr: monthlySalahs.prayerTimes[i].jamaatTimes.zuhr,
        asr: monthlySalahs.prayerTimes[i].jamaatTimes.asr,
        magrib: monthlySalahs.prayerTimes[i].jamaatTimes.magrib,
        isha: monthlySalahs.prayerTimes[i].jamaatTimes.isha,

        earliestFajr: monthlySalahs.prayerTimes[i].startPrayerTimes.fajr,
        sunrise: monthlySalahs.prayerTimes[i].startPrayerTimes.sunrise,
        earliestZuhr: monthlySalahs.prayerTimes[i].startPrayerTimes.zuhr,
        earliestAsr: monthlySalahs.prayerTimes[i].startPrayerTimes.asr,
        earliestIsha: monthlySalahs.prayerTimes[i].startPrayerTimes.isha,

      });
    }
  }

  getNumberOfSalahsForTheMonth(): FormGroup[] {
    const date = this.year + '-' + this.month;
    const days = moment(date, 'YYYY-MM').daysInMonth();
    const prayers = [];

    for (let i = 1; i <= days; i++) {
      prayers.push(this.fb.group({
        day: i,
        fajr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        zuhr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        asr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        magrib: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        isha: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],

        earliestFajr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        sunrise: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        earliestZuhr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        earliestAsr: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
        earliestIsha: ['', [Validators.required, TimeValidator.shouldBe24HourTimeFormat]],
      }));
    }
    return prayers;
  }

  save() {
    console.log(this.form);
    const salahs = this.form.value.salahs;
    const month = this.form.value.month;
    const payload = {
      month: month,
      organisationId: this._organisationId,
      salahs: salahs
    };
    salahs.map(x => {
      x.month = this.form.value.month;
      x.organisationId = this._organisationId;
    });
    this.salahService.saveMonthlySalahs(payload)
      .subscribe(
        data => { alert('sucess'); },
        error => { alert('Something went wrong'); }
      );
  }

  onDoubleClicked(salah, index) {
    this._doubleClickedInput = { salahName: salah, formindex: index };
    console.log(this._doubleClickedInput);
  }

  onCopySalahTimeToOtherDays() {
    console.log('Hello');
    //const time = this.salahs[this._doubleClickedInput.formIndex][this._doubleClickedInput.salahName];
    //console.log(time, this._doubleClickedInput);
  }

  log() {
    console.log("on mouse over");
  }
}
