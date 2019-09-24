import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaMapComponent } from './lea-map.component';

describe('LeaMapComponent', () => {
  let component: LeaMapComponent;
  let fixture: ComponentFixture<LeaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
