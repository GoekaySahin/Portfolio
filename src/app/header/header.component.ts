import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  mobileView: any;
  aboutMe: AboutMeComponent;

  constructor() {
     this.aboutMe = new AboutMeComponent()
     this.mobileView = this.aboutMe.actualSize;
    
  }



}
