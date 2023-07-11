import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingButtonComponent } from './timing-button.component';

describe('TimingButtonComponent', () => {
  let component: TimingButtonComponent;
  let fixture: ComponentFixture<TimingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
