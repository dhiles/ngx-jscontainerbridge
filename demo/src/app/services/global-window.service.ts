import { Injectable, Inject, NgZone } from '@angular/core';
import { WINDOW, WindowRef } from 'ngx-jscontainerbridge';
import { ApplicationManager } from './application-manager.service';

type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;


export class AppGlobal {
  applicationManager?: ApplicationManager;
}

export interface WindowGlobal {
  APP: AppGlobal;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalWindowService {
  APP: AppGlobal; 
  window: WindowGlobal;
  constructor(
    private zone: NgZone,
    @Inject(WINDOW) private windowRef: Window,
  ) {
    this.window = windowRef as unknown as WindowGlobal;
    if (!this.window.APP) {
      this.APP = new AppGlobal();
      this.window.APP = this.APP;
    } else {
      this.APP = this.window.APP;
    }
  }
}
