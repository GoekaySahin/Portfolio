import { Injectable, HostListener } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MobileService {
  mobileView: boolean;

  constructor() {
    if (window.innerWidth <= 1024) {
      this.mobileView = true;
    } else if (window.innerWidth > 1024) {
      this.mobileView = false;
    }
  }
}
