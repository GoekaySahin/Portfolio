import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ImpressumComponent } from "./impressum.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from "@angular/router";

describe("ImpressumComponent", () => {
  let component: ImpressumComponent;
  let fixture: ComponentFixture<ImpressumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressumComponent, FooterComponent],
      imports: [RouterModule.forRoot([])],
    });

    fixture = TestBed.createComponent(ImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
