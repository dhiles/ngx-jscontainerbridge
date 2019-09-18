import { Injectable, Optional } from '@angular/core';
import { NgxJsContainerBridgeConfig } from '../interfaces/ngx-jscontainerbridgeconfig';

// @Injectable({
//  providedIn: 'root'
// })
export class NgxJsContainerBridgeService {
  private _path;
  private _file;

  constructor(@Optional() config: NgxJsContainerBridgeConfig) {
    if (config) {
      this._path = config.path;
      this._file = config.file;
    }
  }

  get path() {
    return this._path;
  }

  get file() {
    return this._file;
  }




}
