import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentComponent } from './child-component.component';
import {By} from "@angular/platform-browser";

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent;
  let fixture: ComponentFixture<ChildComponentComponent>;
  const envUrl = 'http://yahoo.com.tw';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentComponent ],
      providers: [
        {provide: 'url', useValue: envUrl}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const text = fixture.debugElement.query(By.css("#url")).nativeElement.textContent;
    fixture.detectChanges();
    expect(text).toEqual(`pass by environment: ${envUrl}`);
  });
});
