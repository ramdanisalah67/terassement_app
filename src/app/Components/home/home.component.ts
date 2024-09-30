import { AfterViewInit, Component, OnDestroy } from '@angular/core';
declare var skrollr: any; // Declare Skrollr

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  
  private skrollrInstance: any;

  ngAfterViewInit() {
    this.skrollrInstance = skrollr.init();
  }

  ngOnDestroy() {
    if (this.skrollrInstance) {
      this.skrollrInstance.destroy(); // Clean up on component destruction
    }
  }

}