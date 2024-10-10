import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent  implements OnInit {

  constructor(private elementRef: ElementRef,public dialogRef: MatDialogRef<AddressComponent>) { }

  ngOnInit() {}

}
