import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutMeComponent } from "./about-me.component";
import { NgModule } from "@angular/core";

describe("AboutMeComponent", () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
    });
    imports: [NgModule];
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set mobileView to true if size is less than or equal to 1024", () => {
    component.checkSizeAboutMe(500);
    expect(component.mobileView).toBe(true);
  });

  it("should set mobileView to false if size is bigger than or equal to 1024", () => {
    component.checkSizeAboutMe(1200);
    expect(component.mobileView).toBe(false);
  });

  it("should set comeDown on false if  scrollY is smaller than 300 and comeDown is not already true plus mobileView is false", () => {
    component.checkScroll(299);
    expect(component.comeDown).toBe(false);
  });

  it("should set comeDown on true if  scrollY is bigger than 300 and comeDown is not already true plus mobileView is false", () => {
    component.checkScroll(1000);
    expect(component.comeDown).toBe(true);
  });

  it("should set size correctly based on window.innerWidth", () => {
    // Simulieren Sie verschiedene Werte für window.innerWidth
    spyOnProperty(window, "innerWidth", "get").and.returnValue(800);
    spyOnProperty(screen, "availWidth", "get").and.returnValue(1024);

    // Spy für checkSizeAboutMe erstellen
    const spy = spyOn(component, "checkSizeAboutMe");

    // Rufen Sie die onResize-Funktion auf
    component.onResize({ target: { innerWidth: 800 } });

    // Überprüfen Sie, ob checkSizeAboutMe mit dem erwarteten Wert aufgerufen wurde
    expect(spy).toHaveBeenCalledWith(800);
  });

  it("should set size correctly based on smaller width", () => {
    // Simulieren Sie verschiedene Werte für window.innerWidth und screen.availWidth
    spyOnProperty(window, "innerWidth", "get").and.returnValue(1024);
    spyOnProperty(screen, "availWidth", "get").and.returnValue(800);

    // Spy für checkSizeAboutMe erstellen
    const spy = spyOn(component, "checkSizeAboutMe");

    // Rufen Sie die onResize-Funktion auf
    component.onResize({ target: { innerWidth: 1024 } });

    // Überprüfen Sie, ob checkSizeAboutMe mit dem erwarteten Wert aufgerufen wurde
    expect(spy).toHaveBeenCalledWith(800);
  });
});
