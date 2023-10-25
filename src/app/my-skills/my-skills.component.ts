import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-my-skills",
  templateUrl: "./my-skills.component.html",
  styleUrls: ["./my-skills.component.scss"],
})
export class MySkillsComponent {
  /*   header = new HeaderComponent();
  toContact = this.header.scrollToContact; */

  angularIsHovered = false;
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
    } else if (this.windowSize <= 1024 && this.windowSize > 600) {
      window.scrollTo({ top: 4000, behavior: "smooth" });
    }
  }

  refreshWindowSize() {
    this.windowSize = window.innerWidth;
  }

  icons: string[] = [
    "angular.webp",
    "ts.webp",
    "js.webp",
    "html.webp",
    "firebase.webp",
    "git.webp",
    "css.webp",
    "api.webp",
    "scrum.webp",
    "md.webp",
  ];

  icons_name: string[] = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "Firebase",
    "Git",
    "CSS",
    "Rest-API",
    "Scrum",
    "Material-design",
  ];
}
