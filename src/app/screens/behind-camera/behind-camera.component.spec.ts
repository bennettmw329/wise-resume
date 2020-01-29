import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindCameraComponent } from './behind-camera.component';

describe('BehindCameraComponent', () => {
  let component: BehindCameraComponent;
  let fixture: ComponentFixture<BehindCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehindCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
