import { HeaderComponent } from "../header/header.component";
import { Component, NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { CommonModule } from "@angular/common";
import { CheckBrowserService } from "../shared/check-browser.service";

@Component({
  selector: "app-introduce-myself",
  templateUrl: "./introduce-myself.component.html",
  styleUrls: ["./introduce-myself.component.scss"],
})
export class IntroduceMyselfComponent {
  /*   headerComponent = new HeaderComponent();
  toContact = this.headerComponent.scrollToContact; */
  wait = false;
  waitMore = false;
  firefox = false;
  constructor(private browser: CheckBrowserService) {
    setTimeout(() => {
      this.wait = true;
    }, 750);

    setTimeout(() => {
      this.waitMore = true;
    }, 1100);

    this.firefox = this.browser.firefox;
  }

  @NgModule({
    providers: [{ provide: APP_BASE_HREF, useValue: "/my/app" }],
  })
  windowSize = window.innerWidth;

  toContact() {
    this.refreshWindowSize();
    if (this.windowSize > 2400) {
      window.scrollTo({ top: 5200, behavior: "smooth" });
    } else if (this.windowSize < 2300 && this.windowSize > 2000) {
      window.scrollTo({ top: 5000, behavior: "smooth" });
    } else if (this.windowSize > 1800) {
      window.scrollTo({ top: 5100, behavior: "smooth" });
    } else if (this.windowSize <= 1800 && this.windowSize > 1550) {
      window.scrollTo({ top: 4600, behavior: "smooth" });
    } else if (this.windowSize <= 1550 && this.windowSize > 1300) {
      window.scrollTo({ top: 4800, behavior: "smooth" });
    } else if (this.windowSize <= 1300 && this.windowSize > 1024) {
      window.scrollTo({ top: 4000, behavior: "smooth" });
    } else if (
      this.windowSize <= 1024 &&
      this.windowSize > 700 /*  && this.windowSize > 600 */
    ) {
      window.scrollTo({ top: 5270, behavior: "smooth" });
    } else if (this.windowSize <= 700 && this.windowSize > 390) {
      window.scrollTo({ top: 5270, behavior: "smooth" });
    } else if (this.windowSize <= 390) {
      window.scrollTo({ top: 4320, behavior: "smooth" });
    }
  }

  refreshWindowSize() {
    this.windowSize = window.innerWidth;
  }
}
