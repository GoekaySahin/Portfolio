import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StartscreenComponent } from "./startscreen.component";
import { IntroduceMyselfComponent } from "../introduce-myself/introduce-myself.component";
import { RouterModule } from "@angular/router";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { ContactComponent } from "../contact/contact.component";
import { ShowProjectsComponent } from "../show-projects/show-projects.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("StartscreenComponent", () => {
  let component: StartscreenComponent;
  let fixture: ComponentFixture<StartscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartscreenComponent,
        IntroduceMyselfComponent,
        AboutMeComponent,
        MySkillsComponent,
        ShowProjectsComponent,
        ContactComponent,
        FooterComponent,
      ],
      imports: [RouterModule.forRoot([]), FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(StartscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
