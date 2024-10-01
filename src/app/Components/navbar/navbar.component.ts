import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() sectionSelected = new EventEmitter<string>();

  navigateToSection(section: string) {
    this.sectionSelected.emit(section);  // Emit the section name to the parent
  }

}
