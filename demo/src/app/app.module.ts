import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxJsContainerBridgeModule } from 'ngx-jscontainerbridge';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { ApplicationManagerService } from './services/application-manager.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgxJsContainerBridgeModule.forRoot(
      {
        path: 'assets/js',
        file: {
          nameFromTerm: true
        }
      }
    ),
  ],
  providers: [
    ApplicationManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
