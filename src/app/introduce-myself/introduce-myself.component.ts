import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-introduce-myself",
  templateUrl: "./introduce-myself.component.html",
  styleUrls: ["./introduce-myself.component.scss"],
})
export class IntroduceMyselfComponent {
  /*   headerComponent = new HeaderComponent();
  toContact = this.headerComponent.scrollToContact; */

  windowSize = window.innerWidth;

  toContact() {
    this.refreshWindowSize();
    if (this.windowSize > 2400) {
      window.scrollTo({ top: 5200, behavior: "smooth" });
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
      this.windowSize > 600 /*  && this.windowSize > 600 */
    ) {
      window.scrollTo({ top: 5100, behavior: "smooth" });
    } else if (this.windowSize <= 600) {
      window.scrollTo({ top: 4500, behavior: "smooth" });
      //meine bedinung beisst nicht
    }
  }

  refreshWindowSize() {
    this.windowSize = window.innerWidth;
  }
}
