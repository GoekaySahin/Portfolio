import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
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

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init("_b7zq6FogwTzKXGx6");
    let respons = await emailjs.send("service_iw23sth", "template_4xub5hr", {
      form_name: this.form.value.form_name,
      message: this.form.value.message,
      email: this.form.value.email,
    });
    alert("Message has been sent.");
    this.form.reset();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
