import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFamilyComponent } from './map-family.component';

describe('MapFamilyComponent', () => {
  let component: MapFamilyComponent;
  let fixture: ComponentFixture<MapFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
