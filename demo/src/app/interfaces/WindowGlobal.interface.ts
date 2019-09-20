import { ApplicationManager } from '../services/application-manager.service';

export class AppGlobal {
    applicationManager?: ApplicationManager;
}

export interface WindowGlobal {
    APP: AppGlobal;
}
