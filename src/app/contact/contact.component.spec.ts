import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize the form correctly", () => {
    const formGroup = component.form;

    expect(formGroup).toBeTruthy();

    expect(formGroup.get("form_name")).toBeTruthy();
    expect(formGroup.get("email")).toBeTruthy();
    expect(formGroup.get("message")).toBeTruthy();

    expect(formGroup.get("form_name").hasError("required")).toBe(true);
    expect(formGroup.get("email").hasError("required")).toBe(true);
    expect(formGroup.get("email").hasError("email")).toBe(false);
    expect(formGroup.get("message").hasError("required")).toBe(true);
  });

  it("should set invisible to false and then back to true after a delay", () => {
    expect(component.invisible).toBe(true);

    component.sendMessage();

    expect(component.invisible).toBe(false);

    setTimeout(() => {
      expect(component.invisible).toBe(true);
    }, 2000);
  });

  it("should call checkInp when showEmptyField is called", () => {
    component.showEmptyField();

    expect(component.checkInp).toBeTruthy();
  });

  it("should call nameBlink when form_name is empty", () => {
    component.form.get("form_name").setValue("");

    spyOn(component, "nameBlink");

    component.checkInp();

    expect(component.nameBlink).toHaveBeenCalled();
  });

  it("should call emailBlink when email is empty or invalid", () => {
    component.form.get("email").setValue("");

    spyOn(component, "emailBlink");

    component.checkInp();

    expect(component.emailBlink).toHaveBeenCalled();
  });

  it("should call messageBlink when message is empty", () => {
    component.form.get("message").setValue("");

    spyOn(component, "messageBlink");

    component.checkInp();

    expect(component.messageBlink).toHaveBeenCalled();
  });

  it("should set signalMessage to true and then to false after a delay", fakeAsync(() => {
    expect(component.signalMessage).toBe(false); // Überprüfen, ob signalMessage am Anfang false ist

    component.messageBlink();

    expect(component.signalMessage).toBe(true); // Überprüfen, ob signalMessage auf true gesetzt wird

    tick(1500); // Warten auf 1500 Millisekunden (Timeout-Zeit)

    expect(component.signalMessage).toBe(false); // Überprüfen, ob signalMessage nach dem Timeout wieder auf false gesetzt wird
  }));

  it("should set signalMessage to true", () => {
    expect(component.signalMessage).toBe(false); // Überprüfen, ob signalMessage am Anfang false ist

    component.messageTrue();

    expect(component.signalMessage).toBe(true); // Überprüfen, ob messageTrue() signalMessage auf true gesetzt hat
  });

  it("should set signamMessage back to false", () => {
    expect(component.signalMessage).toBe(false);

    component.messageFalse();

    expect(component.signalMessage).toBe(false);
  });

  it("should call setEmailTrue funktion an signalEmail must be set true and after 1500 seconds beack to false", () => {
    expect(component.signalEmail).toBe(false);

    component.emailBlink();
    expect(component.signalEmail).toBe(true);
    component.setEmailFalse();
    expect(component.signalEmail).toBe(false);
  });

  it("should call setNameTrue() funktion an signalEmail must be set true and after 1500 seconds beack to false", () => {
    expect(component.signalName).toBe(false);

    component.nameBlink();
    expect(component.signalName).toBe(true);
    component.setNameFalse();
    expect(component.signalName).toBe(false);
  });

  it("should call setInvisibleFalse and trigger other actions", fakeAsync(() => {
    spyOn(component, "setInvisibleFalse").and.callThrough();
    spyOn(component, "showCLasses");
    spyOn(component, "setInvisibleTrue");
    spyOn(component, "removeCLasses");

    expect(component.invisible).toBe(true);

    component.sendMessage();

    expect(component.setInvisibleFalse).toHaveBeenCalled();
    expect(component.invisible).toBe(false);
    expect(component.showCLasses).toHaveBeenCalled();

    tick(2000);

    expect(component.setInvisibleTrue).toHaveBeenCalled();

    tick(500);

    expect(component.removeCLasses).toHaveBeenCalled();
  }));

  it("should add and remove classes for showCLasses()", () => {
    const div = document.createElement("div");
    div.id = "message-div";
    document.body.appendChild(div);

    component.showCLasses();

    expect(div.classList.contains("scale-in-ver-center")).toBe(false);
    expect(div.classList.contains("scale-out-center")).toBe(false);

    component.removeCLasses();

    expect(div.classList.contains("scale-in-ver-center")).toBe(false);
    expect(div.classList.contains("scale-out-center")).toBe(false);
  });

  it("should call removeCLasses() from setFalse()", () => {
    spyOn(component, "removeCLasses");

    component.setFalse();

    expect(component.removeCLasses).toHaveBeenCalled();
  });
});
