import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartscreenComponent } from "./startscreen/startscreen.component";
import { HeaderComponent } from "./header/header.component";
import { IntroduceMyselfComponent } from "./introduce-myself/introduce-myself.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { ShowProjectsComponent } from "./show-projects/show-projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImpressumComponent } from "./impressum/impressum.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule, NgClass, NgStyle } from "@angular/common";
import { MobileService } from "./shared/mobile.service";
const routes: Routes = [
  { path: "", component: StartscreenComponent },
  {
    path: "imprint",
    component: ImpressumComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    HeaderComponent,
    IntroduceMyselfComponent,
    AboutMeComponent,
    MySkillsComponent,
    ShowProjectsComponent,
    ContactComponent,
    FooterComponent,
    ImpressumComponent,
  ],
  imports: [
    NgStyle,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgClass,
    FormsModule,
    BrowserModule,
  ],
  providers: [MobileService],
  bootstrap: [AppComponent],
  exports: [RouterModule, HeaderComponent],
})
export class AppModule {}
