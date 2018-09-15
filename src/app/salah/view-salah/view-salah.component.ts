import { SalahServiceService } from './../salah-service.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { combineLatest } from 'rxjs';
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-view-salah',
  templateUrl: './view-salah.component.html',
  styleUrls: ['./view-salah.component.css']
})
export class ViewSalahComponent implements OnInit {

  today: moment.Moment;
  jammat: any;
  loading: boolean;

  constructor(private _salahService: SalahServiceService) { }

  ngOnInit() {
    this.today = moment();
    this.getSalahs(null);
  }

  getSalahs($event) {
    if ($event !== null) {
      this.today = $event.date as moment.Moment;
    }

    this.loading = true;

    // month is 0 based
    this._salahService
      .getSalah(this.today.date(), this.today.month() + 1)
      .subscribe(
        data => { this.jammat = data; },
        error => { alert('Something went wrong'); },
        () => { this.loading = false; }
      );
  }
}
