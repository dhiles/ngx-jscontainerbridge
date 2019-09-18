import {
  Component, OnInit, OnDestroy, Optional, ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ComponentRef, ComponentFactory
} from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { ContentComponent } from './content.component';
// import { LayoutManagerService } from '../../../fabric/services/layout-manager.service';
import { NgxJsContainerBridgeService } from '../../services/ngx-jscontainerbridge.service';
import { NgxJsContainerBridgeConfig } from '../../interfaces/ngx-jscontainerbridgeconfig';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit, OnDestroy {
  title = 'app';
  config: NgxJsContainerBridgeConfig;
  componentRef: any;

  @ViewChild('contentcontainer', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    public route: ActivatedRoute,
    public ngxJsContainerBridgeService: NgxJsContainerBridgeService
  ) {
    this.config = this.ngxJsContainerBridgeService;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const path = this.ngxJsContainerBridgeService.path + '/' + params['term'];
      const fileName = this.getFileName(params['term']);
      this.createComponent(path + '/' + fileName);
    });
  }

  getFileName(term: string) {
    let fullName = 'index.html';
    if (this.ngxJsContainerBridgeService.file.default) {
      fullName = this.ngxJsContainerBridgeService.file.default;
    } else {
      const fileName = this.ngxJsContainerBridgeService.file.nameFromTerm ? term : 'index';
      const ext = this.ngxJsContainerBridgeService.file.ext ? this.ngxJsContainerBridgeService.file.ext : 'html';
      fullName = fileName + '.' + ext;
    }
    return fullName;
  }

  ngOnDestroy() {
    this.destroyComponent();
  }

  createComponent(url) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ContentComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.url = url;
  }

  destroyComponent() {
    // this.componentRef.destroy();
  }
}

