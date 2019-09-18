import { Injectable, Inject, NgZone } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GlobalWindowService } from './global-window.service';

export interface ApplicationManager {
  setName: (args: string) => void ;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationManagerService {
  private subject = new BehaviorSubject<any>({});
  initData$: Observable<any> = this.subject.asObservable();
  name: string;
  applicationManager: ApplicationManager;
  constructor(
    public globalWindowService: GlobalWindowService,
    private zone: NgZone
  ) {
    this.globalWindowService.APP.applicationManager = {
      setName:
        (args) => {
          zone.run(() => {
            this.setName(args);
          });
        }
    };

  }

  setName(name: string) {
    this.name = name;
  }
}
