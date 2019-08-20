import { AfterContentChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiAutoSize]',
})
export class AutoSizeDirective implements AfterContentChecked {

  constructor(private elementRef: ElementRef<SVGGraphicsElement>) {
  }

  get element(): SVGGraphicsElement {
    return this.elementRef.nativeElement;
  }

  ngAfterContentChecked(): void {
    const rect = this.element.getBBox();
    this.element.setAttribute('width', `${rect.width}`);
    this.element.setAttribute('height', `${rect.height}`);
  }
}
