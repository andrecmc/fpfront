import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FplistComponent } from './fplist.component';

describe('FplistComponent', () => {
  let component: FplistComponent;
  let fixture: ComponentFixture<FplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
