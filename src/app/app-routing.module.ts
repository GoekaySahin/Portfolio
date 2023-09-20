import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartscreenComponent } from "./startscreen/startscreen.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  { path: "", component: StartscreenComponent },
  { path: "imprint", component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
