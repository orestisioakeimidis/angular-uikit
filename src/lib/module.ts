import {NgModule} from '@angular/core';
import {UIkitAccordionModule} from './accordion/index';

const UIKIT_MODULES = [
  UIkitAccordionModule
];

@NgModule({
  imports: UIKIT_MODULES,
  exports: UIKIT_MODULES,
})
export class UIkitModule {

}
