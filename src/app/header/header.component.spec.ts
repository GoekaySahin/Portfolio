import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set mobileView to true when window.innerWidth is less than or equal to 1024", () => {
    spyOnProperty(window, "innerWidth", "get").and.returnValue(800);

    const event = new Event("resize");
    window.dispatchEvent(event);

    expect(component.mobileView).toBe(true);
  });

  it("should set mobileView to false when window.innerWidth is greater than 1024", () => {
    spyOnProperty(window, "innerWidth", "get").and.returnValue(1200);

    const event = new Event("resize");
    window.dispatchEvent(event);

    expect(component.mobileView).toBe(false);
  });

  it("should toggle button class and aria-expanded attribute", () => {
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector("#myButton");

    // Initially, button should not have the "opened" class
    expect(buttonElement.classList.contains("opened")).toBe(false);

    // Initially, aria-expanded should be "false"
    expect(buttonElement.getAttribute("aria-expanded")).toBeTruthy;

    // Call the toggleButton method
    component.setButton();

    // After calling toggleButton, button should have the "opened" class
    expect(buttonElement.classList.contains("opened")).toBe(true);

    // After calling toggleButton, aria-expanded should be "true"
    expect(buttonElement.getAttribute("aria-expanded")).toBe("true");

    // Call the toggleButton method again
    component.setButton();

    // After calling toggleButton again, button should not have the "opened" class
    expect(buttonElement.classList.contains("opened")).toBe(false);

    // After calling toggleButton again, aria-expanded should be "false"
    expect(buttonElement.getAttribute("aria-expanded")).toBe("false");
  });

  it('should set document.body overflow to "scroll"', () => {
    component.disableOveflow();

    const bodyComputedStyle = getComputedStyle(document.body);

    expect(bodyComputedStyle.overflow).toBe("scroll");
  });

  it('should call scrollToTop, bodyFix, setCloseFalse, and not setClose when buttonElement contains "opened" class', () => {
    const buttonElement: HTMLButtonElement = document.createElement("button");
    buttonElement.classList.add("opened");

    spyOn(component, "scrollToTop");
    spyOn(component, "bodyFix");
    spyOn(component, "setCloseFalse");
    spyOn(component, "setClose");

    component.openMobileLinks(buttonElement);

    expect(component.scrollToTop).toHaveBeenCalled();
    expect(component.bodyFix).toHaveBeenCalled();
    expect(component.setCloseFalse).toHaveBeenCalled();
    expect(component.setClose).not.toHaveBeenCalled();
  });

  it('should call setClose, disableOverflow, and setFalse with delay when buttonElement does not contain "opened" class', fakeAsync(() => {
    const buttonElement: HTMLButtonElement = document.createElement("button");

    spyOn(component, "setClose");
    spyOn(component, "disableOveflow");
    spyOn(component, "setFalse");

    component.openMobileLinks(buttonElement);

    // Use tick to simulate the passage of time
    tick(600);

    expect(component.setClose).toHaveBeenCalled();
    expect(component.disableOveflow).toHaveBeenCalled();
    expect(component.setFalse).toHaveBeenCalled();
  }));

  it("should set close property to true when calling setClose", () => {
    component.setClose();
    expect(component.close).toBe(true);
  });

  it("should set close property to false when calling setCloseFalse", () => {
    component.setCloseFalse();
    expect(component.close).toBe(false);
  });

  it("should set openend property to true when calling setFalse", () => {
    component.setFalse();
    expect(component.openend).toBe(true);
  });

  it('should set document.body overflow to "hidden" when calling bodyFix', () => {
    const initialComputedStyle = getComputedStyle(document.body);

    const updatedComputedStyle = getComputedStyle(document.body);

    component.bodyFix();
    expect(updatedComputedStyle.overflow).toBe("hidden");
  });

  it("should set hoverClassAdded to true when calling addHoverClass", () => {
    component.addHoverClass();
    expect(component.hoverClassAdded).toBe(true);
  });

  it("should set hoverClassAdded to false when calling removeHoverClass", () => {
    component.removeHoverClass();
    expect(component.hoverClassAdded).toBe(false);
  });
});
