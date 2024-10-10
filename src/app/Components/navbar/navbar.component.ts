import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';

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


  constructor(private dialog:MatDialog) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(AddressComponent, {
      width:'600px',height:'450px'
    });

}


}
