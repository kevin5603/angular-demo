import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';




@NgModule({
    declarations: [
        ChildComponentComponent
    ],
    exports: [
        ChildComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ChildModuleModule {
  public static forRoot(environment: { url: string }): ModuleWithProviders<ChildModuleModule> {
    return {
      ngModule: ChildModuleModule,
      providers: [
        {
          provide: 'url', // you can also use InjectionToken
          useValue: environment.url
        }
      ]
    };
  }
}
