import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  aboutUsBeenFocused = false;

  constructor() { }

  onShowSaveButton() {
    this.aboutUsBeenFocused = true;
  }

  log(x: HTMLInputElement) {
    console.log(x.value.length === 0);
  }

}
