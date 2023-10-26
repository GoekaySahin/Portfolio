import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckBrowserService {
  firefox = false;

  constructor() {
    if (window.navigator.userAgent.includes("Firefox")) {
      this.firefox = true;
    }
  }
}
