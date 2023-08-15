import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-introduce-myself",
  templateUrl: "./introduce-myself.component.html",
  styleUrls: ["./introduce-myself.component.scss"],
})
export class IntroduceMyselfComponent {
  headerComponent = new HeaderComponent();
  toContact = this.headerComponent.scrollToContact;
}
