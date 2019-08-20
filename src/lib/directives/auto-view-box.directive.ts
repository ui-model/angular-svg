import { AfterContentChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiAutoViewBox]',
})
export class AutoViewBoxDirective implements AfterContentChecked {

  constructor(private elementRef: ElementRef<SVGGraphicsElement>) {
  }

  get element(): SVGGraphicsElement {
    return this.elementRef.nativeElement;
  }

  ngAfterContentChecked(): void {
    const rect = this.element.getBBox();
    this.element.setAttribute('viewBox', `${rect.x} ${rect.y} ${rect.width} ${rect.height}`);
  }
}
