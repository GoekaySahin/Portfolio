import { Component, HostListener } from '@angular/core';
import { * } as e from '/src'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  /*   mobileView = false;
  actualSize = window.innerWidth;

  constructor() {
    this.checkSize(this.actualSize);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    const size = screen.availWidth;
    this.checkSize(size);
  }

  checkSize(size: any) {
    if (size <= 1024) {
      this.mobileView = true;
    } else if (size > 1024) {
      this.mobileView = false;
    }
    return this.mobileView;
  } */

  size = window.innerWidth;
  actualSize = CheckSize.checkSize(this.size);
}
