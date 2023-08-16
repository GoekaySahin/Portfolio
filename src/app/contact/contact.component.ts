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
    }
  }

  sendMessage() {
    this.setInvisibleFalse();
  }

  setInvisibleFalse() {
    this.invisible = false;
    setTimeout(this.changeCLasses, 3000);
    setTimeout(this.setInvisibleTrue, 3500);
  }

  changeCLasses() {
    let div = document.getElementById("message-div");

    div.classList.toggle("scale-in-ver-center");
    div.classList.toggle("scale-out-center");
  }

  setInvisibleTrue() {
    this.invisible = true;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
