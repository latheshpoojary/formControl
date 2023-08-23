import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParentComponent } from './button-parent.component';

describe('ButtonParentComponent', () => {
  let component: ButtonParentComponent;
  let fixture: ComponentFixture<ButtonParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonParentComponent]
    });
    fixture = TestBed.createComponent(ButtonParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
