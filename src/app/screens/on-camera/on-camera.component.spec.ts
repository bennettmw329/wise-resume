import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCameraComponent } from './on-camera.component';

describe('OnCameraComponent', () => {
  let component: OnCameraComponent;
  let fixture: ComponentFixture<OnCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
