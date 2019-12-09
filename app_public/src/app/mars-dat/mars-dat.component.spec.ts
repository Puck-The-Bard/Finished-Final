import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsDatComponent } from './mars-dat.component';

describe('MarsDatComponent', () => {
  let component: MarsDatComponent;
  let fixture: ComponentFixture<MarsDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
