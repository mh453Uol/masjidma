import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isCollapsed = true;
  }

  onToggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
