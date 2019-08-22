import { AfterContentChecked, Directive, ElementRef, Input } from '@angular/core';

export enum ResizeStrategy {
  Content = 'Content',
  Full = 'Full',
}

@Directive({
  selector: 'svg[uiAutoSize]',
})
export class AutoSizeDirective implements AfterContentChecked {
  constructor(private elementRef: ElementRef<SVGSVGElement>) {
  }

  @Input('uiAutoSizeStrategy')
  strategy: ResizeStrategy = ResizeStrategy.Full;
  @Input('attr.width')
  width: number;
  @Input('attr.height')
  height: number;

  get element(): SVGSVGElement {
    return this.elementRef.nativeElement;
  }

  ngAfterContentChecked(): void {
    if (this.strategy === ResizeStrategy.Content) {
      const rect = this.element.getBBox();
      this.width = rect.width;
      this.height = rect.height;
    } else {
      const parent = this.element.parentElement;
      this.width = parent.clientWidth;
      this.height = parent.clientHeight;
    }
  }
}
