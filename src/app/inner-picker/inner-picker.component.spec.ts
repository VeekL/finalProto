import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPickerComponent } from './inner-picker.component';

describe('InnerPickerComponent', () => {
  let component: InnerPickerComponent;
  let fixture: ComponentFixture<InnerPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
