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

  @Input() month: number;
  @Input() year: number;
  @Input() loadData = false;

  form: FormGroup;
  mask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
  isLoading = false;
  prayersLoadedBefore = false;

  private timeToCopy;
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
      if (changes.loadData.currentValue && !this.prayersLoadedBefore) {
        // get monthly salah for the month when the tab is clicked
        this.getMonthlyPrayers();
      }
    }
  }

  getMonthlyPrayers() {
    this.isLoading = true;
    this.salahService.getMonthlySalahs(this.month, this._organisationId)
      .subscribe(
        data => {
          this.updateFormWithMonthlySalahs(data);
        },
        error => { alert('Couldnt get monthly salahs'); },
        () => {
          this.isLoading = false;
          this.prayersLoadedBefore = true;
        }
      );
  }

  updateFormWithMonthlySalahs(monthlySalahs) {
    console.log('Updating form with latest data', monthlySalahs);
    monthlySalahs.map((x, index) => {

      this.salahs.at(index).patchValue({
        fajr: x.jamaatTimes.fajr,
        zuhr: x.jamaatTimes.zuhr,
        asr: x.jamaatTimes.asr,
        magrib: x.jamaatTimes.magrib,
        isha: x.jamaatTimes.isha,

        earliestFajr: x.startPrayerTimes.fajr,
        sunrise: x.startPrayerTimes.sunrise,
        earliestZuhr: x.startPrayerTimes.zuhr,
        earliestAsr: x.startPrayerTimes.asr,
        earliestIsha: x.startPrayerTimes.isha,
      });

    });
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
    const payload = [];

    this.form.value.salahs.map(x => {
      payload.push({
        day: x.day,
        month: +this.month,
        organisationId: this._organisationId,
        jamaatTimes: {
          fajr: x.fajr,
          zuhr: x.zuhr,
          asr: x.asr,
          magrib: x.magrib,
          isha: x.isha
        },
        startPrayerTimes: {
          fajr: x.earliestFajr,
          sunrise: x.sunrise,
          zuhr: x.earliestZuhr,
          asr: x.earliestAsr,
          isha: x.earliestIsha
        }
      });

    });
    this.salahService.saveMonthlySalahs(payload, this.month, this._organisationId)
      .subscribe(
        data => { alert('sucess'); },
        error => { alert('Something went wrong'); }
      );
  }

  onShowPopOver($popover, $input, index, prayer) {
    console.log($input.target, index, prayer);
    if ($input.target.value) {
      this.timeToCopy = { index: index, field: prayer, popover: $popover };
      $popover.show();
    }
  }

  onCopySalahTimeToOtherDays() {
    const time = this.salahs.at(this.timeToCopy.index).get(this.timeToCopy.field).value;
    for (let i = 0; i < this.salahs.length; i++) {
      this.salahs.at(i).get(this.timeToCopy.field).patchValue(time);
    }
    this.timeToCopy.popover.hide();
  }

  onRefresh() {
    this.getMonthlyPrayers();
  }

  log(e) {
    console.log("on mouse over", e);
  }
}
