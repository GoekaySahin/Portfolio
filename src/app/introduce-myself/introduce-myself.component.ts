import { HeaderComponent } from "../header/header.component";
import { Component, NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { CommonModule, NgClass, NgStyle } from "@angular/common";
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
  safari = false;
  opera = false;
  edge = false;

  constructor(private browser: CheckBrowserService) {
    setTimeout(() => {
      this.wait = true;
    }, 350);

    setTimeout(() => {
      this.waitMore = true;
    }, 1100);

    this.firefox = this.browser.firefox;
    this.safari = this.browser.safari;
    this.opera = this.browser.opera;
    this.edge = this.browser.edge;
  }

  @NgModule({
    providers: [{ provide: APP_BASE_HREF, useValue: "/my/app" }],
  })
  windowSize = window.innerWidth;

  refreshWindowSize() {
    this.windowSize = window.innerWidth;
  }
}
