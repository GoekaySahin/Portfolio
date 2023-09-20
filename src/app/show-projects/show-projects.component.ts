import { Component } from "@angular/core";
import { HostListener } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-show-projects",
  templateUrl: "./show-projects.component.html",
  styleUrls: ["./show-projects.component.scss"],
})
export class ShowProjectsComponent {
  laptops: string[] = ["join.png", "loco.png", "simple-crm.png"];
  headlines: string[] = ["Join", "El Pollo Loco", "Simple-CRM"];
  technologies: string[] = [
    "JavaSctipt | HTML | CSS",
    "JavaScript | HTML | CSS",
    "Angular | Firebase",
  ];
  descriptions: string[] = [
    "Aufgabenverwaltung, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Hilfe der Drap-and-Drop-Funktion und ordnen Sie Benutzer und Kategorien zu.",
    "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert.",
    "Ein sehr Simples CRM System mit einem Dashboar, möglichkeiten User und Costumer anzulegen und zu bearbeiten.",
  ];

  openLink(index: number) {
    const links = [
      this.openGitHubJoin,
      this.openGitHubLocco,
      this.openGitHubCRM,
    ];

    if (links[index]) {
      links[index]();
    }
  }

  openProject(i: string | number) {
    const links = [
      this.openProjectJoin,
      this.openProjectloco,
      this.openProjectCRM,
    ];

    if (links[i]) {
      links[i]();
    }
  }

  openProjectJoin() {
    window.open("https://join.gökay-sahin.de/login", "_self");
  }
  openProjectloco() {
    window.open("https://el-pollo-loco.gökay-sahin.de", "_self");
  }
  openProjectCRM() {
    window.open("https://simple-crm.gökay-sahin.de", "_self");
  }

  openGitHubLocco() {
    window.open("https://github.com/HydraCoding/El-Pollio-Loco-", "_self");
  }

  openGitHubJoin() {
    window.open("https://github.com/HydraCoding/Join-Management-Tool", "_self");
  }
  openGitHubCRM() {
    window.open("https://github.com/GoekaySahin/simple-crm", "_self");
  }
}
