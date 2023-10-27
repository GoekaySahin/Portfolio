import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckBrowserService {
  firefox = false;
  safari = false;

  constructor() {
    if (window.navigator.userAgent.includes("Firefox")) {
      this.firefox = true;
    }
    if (
      window.navigator.userAgent.includes("Safari") &&
      !window.navigator.userAgent.includes("Chrome")
    ) {
      this.safari = true;
    }
  }
}
