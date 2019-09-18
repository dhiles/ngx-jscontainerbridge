import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnDestroy, OnInit, Output,
  Renderer2,
  ViewChild,
  SecurityContext
} from '@angular/core';
import { BehaviorSubject, forkJoin, fromEvent, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
// import { ApplicationManager } from 'src/app/fabric/services/application-manager.service';

@Component({
  selector: 'app-inline-frame',
  templateUrl: './inline-frame.component.html'
})
export class InlineFrameComponent implements OnInit, AfterViewInit, OnDestroy {
  get source(): string {
      return this._source;
  }

  @Input() set source(url: string) {
      this._source = this.sanitizer.sanitize(SecurityContext.URL, url);
  }

  @Output() iFrameInfoEvent = new EventEmitter<any>();

  iFrameDocument: Document;
  iFrameWindow: Window;
  iFrameBody: HTMLElement;
  activeSource: string;
  private eventListeners: Array<any> = [];
  private $unsubscribe = new Subject();
  @ViewChild('iframe', { static: true }) elementRef: ElementRef;
  private _source: string;
  private $bodyHeight: Subject<number> = new Subject<number>();
  constructor(
    //  public applicationManager: ApplicationManager,
      private renderer: Renderer2,
      private cdr: ChangeDetectorRef,
      private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
      this.activeSource = this.source;
      this.iFrameDocument = this.elementRef.nativeElement.contentDocument;
      this.iFrameWindow = this.elementRef.nativeElement.contentWindow;
      // this.iFrameInfoEvent.emit({iFrameWindow: this.iFrameWindow});
  }

  getIFrameWindow() {
      return this.iFrameWindow;
  }

//    reload() {
//        if (this.iFrameDocument && this.iFrameDocument.location) {
//           this.iFrameDocument.location.reload();
//        }
//    }

  ngAfterViewInit() {
      // this.iFrameWindow.postMessage({ applicationManager: this.applicationManager }, '*');
  }

  ngOnDestroy(): void {
      this.$unsubscribe.next();
      this.$unsubscribe.complete();

      // detach event listeners
      this.eventListeners.map((listener) => listener());
  }

}
