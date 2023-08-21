import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import emailjs from "@emailjs/browser";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    form_name: "",
    message: "",
    email: "",
  });

  invisible = true;
  signalName = false;
  signalEmail = false;
  signalMessage = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      form_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  async send() {
    if (this.form.valid) {
      emailjs.init("_b7zq6FogwTzKXGx6");
      let respons = await emailjs.send("service_iw23sth", "template_4xub5hr", {
        form_name: this.form.value.form_name,
        message: this.form.value.message,
        email: this.form.value.email,
      });
      this.sendMessage();
      this.form.reset();
    } else {
      this.showEmptyField();
    }
  }

  showEmptyField() {
    this.checkInp();
  }

  checkInp() {
    if (this.form.get("form_name").value === "") {
      this.nameBlink();
    } else {
      this.setNameFalse();
    }
    if (
      this.form.get("email").value === "" ||
      !this.form.get("email").value.includes("@") ||
      !this.form.get("email").value.includes(".")
    ) {
      this.emailBlink();
    } else {
      this.setEmailFalse();
    }
    if (this.form.get("message").value === "") {
      this.messageBlink();
    } else {
      this.messageFalse();
    }
  }

  messageBlink() {
    this.messageTrue();
    setTimeout(() => this.messageFalse(), 1500);
  }

  messageTrue() {
    this.signalMessage = true;
  }

  messageFalse() {
    this.signalMessage = false;
  }

  emailBlink() {
    this.setEmailTrue();
    setTimeout(() => this.setEmailFalse(), 1500);
  }

  setEmailTrue() {
    this.signalEmail = true;
  }

  setEmailFalse() {
    this.signalEmail = false;
  }

  nameBlink() {
    this.setNameTrue();
    setTimeout(() => this.setNameFalse(), 1500);
    /*     setTimeout(this.setNameTrue, 2430);
    setTimeout(this.setNameFalse, 3645); */
  }

  setNameTrue() {
    this.signalName = true;
  }

  setNameFalse() {
    this.signalName = false;
  }

  sendMessage() {
    this.setInvisibleFalse();
  }

  setInvisibleFalse() {
    this.invisible = false;
    this.showCLasses();
    setTimeout(() => {
      this.setInvisibleTrue();
    }, 2000);
    setTimeout(() => {
      this.removeCLasses();
    }, 1500);
  }

  setInvisibleTrue() {
    this.invisible = true;
  }
  showCLasses() {
    let div = document.getElementById("message-div");

    div.classList.remove("scale-in-ver-center");
    div.classList.add("scale-out-center");
  }

  removeCLasses() {
    let div = document.getElementById("message-div");

    div.classList.add("scale-in-ver-center");
    div.classList.remove("  ");
  }

  setFalse() {
    let div = document.getElementById("message-div");

    this.removeCLasses();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
