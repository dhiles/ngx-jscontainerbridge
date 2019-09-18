import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineFrameComponent } from './components/inline-frame/inline-frame.component';
import { WINDOW_PROVIDERS } from './services/window.service';
import { ContentComponent } from './components/content/content.component';
import { ContentContainerComponent } from './components/content/content-container.component';
import { CachedSrcDirective } from './directives/cached-src.directive';
import { DynamicContentAnchorDirective } from './directives/dynamic-content-anchor.directive';
import { NgxJsContainerBridgeService } from './services/ngx-jscontainerbridge.service';
import { NgxJsContainerBridgeConfig } from './interfaces/ngx-jscontainerbridgeconfig';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InlineFrameComponent,
    CachedSrcDirective,
    ContentContainerComponent,
    ContentComponent,
    DynamicContentAnchorDirective
  ],
  exports: [
    InlineFrameComponent,
    CachedSrcDirective,
    ContentContainerComponent
  ],
  entryComponents: [
    ContentComponent
  ]
})
export class NgxJsContainerBridgeModule {
  static forRoot(config: NgxJsContainerBridgeConfig): ModuleWithProviders {
    return {
      ngModule: NgxJsContainerBridgeModule,
      providers: [
        { provide: NgxJsContainerBridgeService, useValue: config },
        WINDOW_PROVIDERS
      ]
    };
  }
}




