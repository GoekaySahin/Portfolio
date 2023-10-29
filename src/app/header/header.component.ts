import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MobileService } from "../shared/mobile.service";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  mobileView: boolean;
  openend = true;
  close = false;
  hoverClassAdded = false;
  inImprint = false;

  @ViewChild("aboutMeSection") aboutMeSection: ElementRef;
  @Output() aboutMeElement = new EventEmitter<ElementRef>();

  @ViewChild("skills") mySkills: ElementRef;
  @ViewChild("projects") projects: ElementRef;

  constructor(mobileview: MobileService, private elementRef: ElementRef) {
    this.mobileView = mobileview.mobileView;
  }

  ngOnInit(): void {
    this.checkLink();
  }

  ngAfterViewInit(): void {
    this.aboutMeElement.emit(this.aboutMeSection);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    if (window.innerWidth <= 1024) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
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
    this.setButton();
  }

  scrollToSkills() {
    this.setButton();
  }

  scrollToProjects() {
    this.setButton();
  }

  scrollToContact() {
    this.setButton();
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
