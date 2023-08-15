import { Component, ViewChild } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-introduce-myself",
  templateUrl: "./introduce-myself.component.html",
  styleUrls: ["./introduce-myself.component.scss"],
})
export class IntroduceMyselfComponent {
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;

  scrollToContact() {
    this.headerComponent.scrollToContact();
  }
}
