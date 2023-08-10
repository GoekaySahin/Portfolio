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
  openend = true;
  close = false;

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

  scrollToAboutMe() {
    window.scrollTo({ top: 800, behavior: "smooth" });
    this.setButton();
  }

  scrollToSkills() {
    window.scrollTo({ top: 1400, behavior: "smooth" });
    this.setButton();
  }

  scrollToProjects() {
    window.scrollTo({ top: 2300, behavior: "smooth" });
    this.setButton();
  }

  scrollToContact() {
    window.scrollTo({ top: 4850, behavior: "smooth" });
    this.setButton();
  }
}
