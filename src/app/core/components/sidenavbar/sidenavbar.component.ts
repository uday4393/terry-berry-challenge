import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent {
  @Output() closeSideNav = new EventEmitter();

  constructor( ) { }
}
