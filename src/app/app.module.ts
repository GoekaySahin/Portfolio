import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceMyselfComponent } from './introduce-myself/introduce-myself.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    HeaderComponent,
    IntroduceMyselfComponent,
    AboutMeComponent,
    MySkillsComponent,
    ShowProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
