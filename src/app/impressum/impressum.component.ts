import { Component, Renderer2 } from "@angular/core";

@Component({
  selector: "app-impressum",
  templateUrl: "./impressum.component.html",
  styleUrls: ["./impressum.component.scss"],
})
export class ImpressumComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const footer = document.getElementById("footer");
    if (footer) {
      this.renderer.setStyle(footer, "height", "21%");
    }
  }
}
