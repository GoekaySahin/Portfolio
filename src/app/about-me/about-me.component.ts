import { Component, HostListener } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
  mobileView: any;
  actualSize = window.innerWidth;
  comeDown = false;
  scrollY = window.scrollY;

  constructor() {
    this.checkSizeAboutMe(this.actualSize);
    this.checkScroll(this.scrollY);
  }

  checkScrollY() {
    scrollY = window.scrollY;
    this.checkScroll(scrollY);
  }

  checkScroll(scrollY) {
    if (scrollY >= 300 && this.comeDown == false && !this.mobileView) {
      this.comeDown = true;
    } else if (this.mobileView && scrollY > 400) {
      this.comeDown = true;
    } else if (this.comeDown == false) {
      setTimeout(() => {
        this.checkScrollY();
      }, 150);
    } else {
      return;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    let size: number;
    if (window.innerWidth > screen.availWidth) {
      size = screen.availWidth;
    } else {
      size = window.innerWidth;
    }
    this.checkSizeAboutMe(size);
  }

  checkSizeAboutMe(size: any) {
    if (size <= 1024) {
      this.mobileView = true;
    } else if (size > 1024) {
      this.mobileView = false;
    }
  }
}
