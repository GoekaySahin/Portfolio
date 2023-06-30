import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceMyselfComponent } from './introduce-myself.component';

describe('IntroduceMyselfComponent', () => {
  let component: IntroduceMyselfComponent;
  let fixture: ComponentFixture<IntroduceMyselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroduceMyselfComponent]
    });
    fixture = TestBed.createComponent(IntroduceMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
