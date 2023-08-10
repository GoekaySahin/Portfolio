import { Component, HostListener, OnInit } from "@angular/core";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  mobileView: any;
  aboutMe: AboutMeComponent;

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    if (window.innerWidth < 1024) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  constructor() {
    this.aboutMe = new AboutMeComponent();
    this.mobileView = this.aboutMe.mobileView;
  }
}
