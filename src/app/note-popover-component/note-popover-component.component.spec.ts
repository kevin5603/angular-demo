import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePopoverComponentComponent } from './note-popover-component.component';

describe('NotePopoverComponentComponent', () => {
  let component: NotePopoverComponentComponent;
  let fixture: ComponentFixture<NotePopoverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotePopoverComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePopoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
