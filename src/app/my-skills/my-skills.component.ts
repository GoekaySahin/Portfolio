import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-my-skills",
  templateUrl: "./my-skills.component.html",
  styleUrls: ["./my-skills.component.scss"],
})
export class MySkillsComponent {
  scrollToContact() {
    throw new Error("Method not implemented.");
  }
  icons: string[] = [
    "angular.png",
    "ts.png",
    "js.png",
    "html.png",
    "firebase.png",
    "git.png",
    "css.png",
    "api.png",
    "scrum.png",
    "md.png",
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
    "Material design",
  ];
}
