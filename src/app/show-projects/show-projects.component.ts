import { Component } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-show-projects",
  templateUrl: "./show-projects.component.html",
  styleUrls: ["./show-projects.component.scss"],
})
export class ShowProjectsComponent {
  laptops: string[] = ["join.png", "loco.png", "firebase.png"];
  headlines: string[] = ["Join", "El Pollo Loco", "Ring of fire"];
  technologies: string[] = [
    "JavaSctipt | HTML | CSS",
    "JavaScript | HTML | CSS",
    "Angular | Firebase",
  ];
  descriptions: string[] = [
    "Aufgabenverwaltung, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Hilfe der Drap-and-Drop-Funktion und ordnen Sie Benutzer und Kategorien zu.",
    "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert.",
    "Ein sehr einfaches Spiel mit Firestore Echtzeit-Datensynchronisierung zwischen verschiedenen Clients und lokales Caching.",
  ];

  openLink(index: number) {
    const links = [
      this.openGitHubJoin,
      this.openGitHubLocco,
      this.openGitHubFire,
      // Weitere Links hier...
    ];

    if (links[index]) {
      links[index]();
    }
  }

  openProject(i: string | number) {
    const links = [
      this.openProjectJoin,
      this.openProjectloco,
      this.openProjectFire,
    ];

    if (links[i]) {
      links[i]();
    }
  }

  openProjectJoin() {
    window.open("https://join.gökay-sahin.de/login", "blank");
  }
  openProjectloco() {
    window.open("https://el-pollo-loco.gökay-sahin.de", "blank");
  }
  openProjectFire() {
    window.open("https://ring-of-fire.gökay-sahin.de", "blank");
  }

  openGitHubLocco() {
    window.open("https://github.com/HydraCoding/El-Pollio-Loco-", "_blank");
  }

  openGitHubJoin() {
    window.open(
      "https://github.com/HydraCoding/Join-Management-Tool",
      "_blank"
    );
  }
  openGitHubFire() {
    window.open("https://github.com/HydraCoding/RingOfFire", "_blank");
  }
}
