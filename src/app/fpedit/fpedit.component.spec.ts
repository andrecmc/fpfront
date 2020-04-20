import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeditComponent } from './fpedit.component';

describe('FpeditComponent', () => {
  let component: FpeditComponent;
  let fixture: ComponentFixture<FpeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
