import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {MapFamilyComponent} from "./map-family/map-family.component";
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'demo', component: DemoComponent },
  { path: 'map-family', component: MapFamilyComponent },
  { path: 'test', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
