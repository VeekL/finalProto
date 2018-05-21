import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPickerVidComponent } from './main-picker-vid.component';

describe('MainPickerVidComponent', () => {
  let component: MainPickerVidComponent;
  let fixture: ComponentFixture<MainPickerVidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPickerVidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPickerVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
