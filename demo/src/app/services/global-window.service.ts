import { Injectable, Inject, NgZone } from '@angular/core';
import { WINDOW } from 'ngx-jscontainerbridge';
import { AppGlobal, WindowGlobal } from '../interfaces/WindowGlobal.interface'

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
