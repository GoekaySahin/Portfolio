import { Component, HostListener } from '@angular/core';




@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  mobileView: any;
  actualSize = window.innerWidth;

  constructor() {
    this.checkSize(this.actualSize);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    let size: number;
    if(window.innerWidth > screen.availWidth){
      size = screen.availWidth;  
    } else {
      size = window.innerWidth;

    }
    this.checkSize(size);
  }

  checkSize(size: any) {
    if (size <= 1024) {
      this.mobileView = true;
    } else if (size > 1024) {
      this.mobileView = false;
    }
  } 
  
}
