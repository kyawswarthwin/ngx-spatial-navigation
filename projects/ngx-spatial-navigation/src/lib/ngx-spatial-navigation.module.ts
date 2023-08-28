import { NgModule } from '@angular/core';

import { NavFocusableDirective } from './directives/nav-focusable.directive';
import { NavRootDirective } from './directives/nav-root.directive';
import { NavSectionDirective } from './directives/nav-section.directive';

@NgModule({
  declarations: [],
  imports: [NavRootDirective, NavSectionDirective, NavFocusableDirective],
  exports: [NavRootDirective, NavSectionDirective, NavFocusableDirective],
})
export class NgxSpatialNavigationModule {}
