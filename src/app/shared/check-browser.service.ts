import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckBrowserService {
  firefox = false;
  safari = false;
  opera = false;
  edge = false;

  constructor() {
    if (window.navigator.userAgent.includes("Firefox")) {
      this.firefox = true;
    } else if (
      window.navigator.userAgent.includes("Safari") &&
      !window.navigator.userAgent.includes("Chrome")
    ) {
      this.safari = true;
    } else if (window.navigator.userAgent.includes("OPR")) {
      this.opera = true;
    } else if (window.navigator.userAgent.includes("Edg")) {
      this.edge = true;
    }
  }
}
