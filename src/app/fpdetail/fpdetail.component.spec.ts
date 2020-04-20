import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpdetailComponent } from './fpdetail.component';

describe('FpdetailComponent', () => {
  let component: FpdetailComponent;
  let fixture: ComponentFixture<FpdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
