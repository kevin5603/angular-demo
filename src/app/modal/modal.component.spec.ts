import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import {ModalServiceService} from "../modal-service.service";

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        ModalServiceService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('test onInit timeout', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.text).toEqual('empty');
    tick(5000);
    expect(component.text).toEqual('hello');
    flush();
  }));

  it('promise use fakeAsync test', fakeAsync(() => {
    fixture.detectChanges();
    tick(1500);
    expect(component.data).toEqual('Data');
    flush();
  }));

  it('promise use async test', async() => {
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.data).toEqual('Data');
    }, 5000)

  });



  it('should create', async() => {
    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button.textContent).toContain('open modal');
    button.click();

    expect(document.body.querySelector('.modal-body')!.textContent).toContain('this is body');
    expect(document.body.querySelector('.modal-title')!.textContent).toContain('Title');
  });
});
