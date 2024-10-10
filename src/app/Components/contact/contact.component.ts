import { Component, EventEmitter, Output } from '@angular/core';
import { InfosComponent } from '../infos/infos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  constructor(private dialog:MatDialog) {}

  navigateToSection(section: string) {
    this.sectionSelected.emit(section);  // Emit the section name to the parent
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InfosComponent, {
      width:'600px',height:'350px'
    });

}


}
