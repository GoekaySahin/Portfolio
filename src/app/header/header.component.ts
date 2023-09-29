import { Component, HostListener, Injectable, OnInit } from "@angular/core";
import { AboutMeComponent } from "../about-me/about-me.component";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  mobileView: any;
  aboutMe: AboutMeComponent;
  openend = true;
  close = false;
  hoverClassAdded = false;
  inImprint = false;

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    if (window.innerWidth <= 1024) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  constructor() {
    this.aboutMe = new AboutMeComponent();
    this.mobileView = this.aboutMe.mobileView;
  }

  ngOnInit(): void {
    this.checkLink();
  }

  setButton(): void {
    const buttonElement = document.getElementById(
      "myButton"
    ) as HTMLButtonElement;

    buttonElement.classList.toggle("opened");
    buttonElement.setAttribute(
      "aria-expanded",
      buttonElement.classList.contains("opened").toString()
    );
    this.openMobileLinks(buttonElement);
  }

  disableOveflow() {
    document.body.style.overflow = "scroll";
  }

  openMobileLinks(buttonElement) {
    if (buttonElement.classList.contains("opened")) {
      this.scrollToTop();
      this.bodyFix();
      this.openend = false;
      this.setCloseFalse();
    } else {
      this.setClose();
      setTimeout(this.disableOveflow, 600);
      setTimeout(() => this.setFalse(), 600);
    }
  }

  setClose() {
    this.close = true;
  }

  setCloseFalse() {
    this.close = false;
  }

  setFalse() {
    this.openend = true;
  }

  bodyFix() {
    document.body.style.overflow = "hidden";
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  scrollToAboutMeMobile() {
    this.scrollToAboutMe();
    this.setButton();
  }

  scrollToSkillsMobile() {
    this.scrollToSkills();
    this.setButton();
  }

  scrollToProjectsMobile() {
    this.scrollToProjects();
    this.setButton();
  }

  scrollToContactMobile() {
    this.scrollToContact();
    this.setButton();
  }

  scrollToAboutMe() {
    if (window.innerWidth > 2000) {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } else if (window.innerWidth > 1800) {
      window.scrollTo({ top: 900, behavior: "smooth" });
    } else if (window.innerWidth > 1550) {
      window.scrollTo({ top: 700, behavior: "smooth" });
    } else if (window.innerWidth > 1300) {
      window.scrollTo({ top: 700, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 800, behavior: "smooth" });
    }
  }

  scrollToSkills() {
    if (window.innerWidth > 2000) {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    } else if (window.innerWidth > 1800) {
      window.scrollTo({ top: 1800, behavior: "smooth" });
    } else if (window.innerWidth > 1300) {
      window.scrollTo({ top: 1600, behavior: "smooth" });
    } else if (window.innerWidth > 1024) {
      window.scrollTo({ top: 1500, behavior: "smooth" });
    } else if (window.innerWidth > 400) {
      window.scrollTo({ top: 1380, behavior: "smooth" });
    } else if (window.innerWidth < 400) {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }
  }

  scrollToProjects() {
    if (window.innerWidth > 2300) {
      window.scrollTo({ top: 3000, behavior: "smooth" });
    } else if (window.innerWidth > 1800) {
      window.scrollTo({ top: 2900, behavior: "smooth" });
    } else if (window.innerWidth > 1024) {
      window.scrollTo({ top: 2500, behavior: "smooth" });
    } else if (window.innerWidth > 560) {
      window.scrollTo({ top: 2400, behavior: "smooth" });
    } else if (window.innerWidth < 560) {
      window.scrollTo({ top: 2300, behavior: "smooth" });
    }
  }

  scrollToContact() {
    window.scrollTo({ top: 4850, behavior: "smooth" });
  }

  addHoverClass() {
    this.hoverClassAdded = true;
  }

  removeHoverClass() {
    this.hoverClassAdded = false;
  }

  checkLink() {
    if (window.location.href.includes("imp")) {
      this.inImprint = true;
    } else {
      this.inImprint = false;
    }
  }
}
