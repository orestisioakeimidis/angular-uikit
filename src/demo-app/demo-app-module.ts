import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIkitModule} from '../lib/module';
import {DemoAppComponent} from './demo-app/demo-app.component';
import {AccordionDemoComponent} from './accordion/accordion-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    UIkitModule
  ],
  declarations: [
    DemoAppComponent,
    AccordionDemoComponent
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {
}
