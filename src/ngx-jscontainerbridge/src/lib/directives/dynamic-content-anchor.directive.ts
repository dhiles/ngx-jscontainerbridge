import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicContentAnchor]'
})
export class DynamicContentAnchorDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
