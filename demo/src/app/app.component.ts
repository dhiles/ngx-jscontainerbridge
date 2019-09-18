import { Component } from '@angular/core';
import { ApplicationManagerService } from './services/application-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  name = "me";

  constructor( public applicationManagerService: ApplicationManagerService) {

  }
}
