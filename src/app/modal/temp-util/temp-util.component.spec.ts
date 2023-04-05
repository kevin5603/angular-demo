import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempUtilComponent } from './temp-util.component';

describe('TempUtilComponent', () => {
  let component: TempUtilComponent;
  let fixture: ComponentFixture<TempUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
