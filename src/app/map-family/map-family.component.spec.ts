import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { MapFamilyComponent } from './map-family.component';
import {BackendService} from "../backend.service";
import {defer, Observable, of} from "rxjs";
import {CalculateService} from "../calculate.service";

// export function fakeAsyncResponse<T>(data: T) {
//   return defer(() => Promise.resolve(data));
// }

const BackendServiceMock = {
  getSwitchMapData(): Observable<number> {
    return of( 10,20 );
  },
  getConcatMapData(): Observable<number> {
    return of( 10,20 );
  }
};

describe('MapFamilyComponent', () => {
  let component: MapFamilyComponent;
  let fixture: ComponentFixture<MapFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapFamilyComponent ],
      providers: [
        CalculateService,
        {provide: BackendService, useValue: BackendServiceMock}
      ]
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

  it('test', async() => {
    fixture.detectChanges();
    await fixture.whenStable()
      expect(component.concat_text).toEqual(['10的2次方 計算結果為：100', '20的2次方 計算結果為：400']);
  });
});
