import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpnewComponent } from './fpnew.component';

describe('FpnewComponent', () => {
  let component: FpnewComponent;
  let fixture: ComponentFixture<FpnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
