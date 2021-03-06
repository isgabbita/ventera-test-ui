import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionComponent } from './unitconversion.component';

describe('RegistrationComponent', () => {
  let component: UnitConversionComponent;
  let fixture: ComponentFixture<UnitConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
