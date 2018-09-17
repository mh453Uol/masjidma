import { FormControl } from '@angular/forms';

export class TimeValidator {

  static shouldBe24HourTimeFormat(control: FormControl) {
    const text: string = control.value;
    let units: string[];
    let hourLeft: number;
    let hourRight: number;

    if (text.length === 5 && text.indexOf('_') === -1) {
      units = text.split(':');
      hourLeft = +(units[0][0]);
      hourRight = +(units[0][1]);

      if (hourLeft === 2 && hourRight > 3) {
        //Error: hourRight should be less than 4 if hourleft is 2
        return { shouldBe24HourTimeFormat: true };
      } else {
        return null;
      }
    }
    //Error: should be 5 chars
    return { shouldBe24HourTimeFormat: true };
  }
}
