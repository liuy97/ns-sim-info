import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SimInfoComponent } from './sim-info.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SimInfoComponent }])],
  declarations: [SimInfoComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SimInfoModule {}
