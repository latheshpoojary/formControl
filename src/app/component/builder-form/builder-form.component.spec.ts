import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFormComponent } from './builder-form.component';

describe('BuilderFormComponent', () => {
  let component: BuilderFormComponent;
  let fixture: ComponentFixture<BuilderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderFormComponent]
    });
    fixture = TestBed.createComponent(BuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
