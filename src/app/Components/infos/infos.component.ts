import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
export class InfosComponent  implements OnInit {


  constructor(private elementRef: ElementRef,public dialogRef: MatDialogRef<InfosComponent>) { }

  ngOnInit() {}

}
