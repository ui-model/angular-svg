import { Directive, HostBinding, Input } from '@angular/core';
import { AutoSizeDirective } from './auto-size.directive';

@Directive({
  selector: '[uiAutoViewBox]',
})
export class AutoViewBoxDirective {

  constructor(private autoSize: AutoSizeDirective) {
  }

  @Input()
  left = 0;
  @Input()
  top = 0;

  get width(): number {
    return this.autoSize.width;
  }

  get height(): number {
    return this.autoSize.height;
  }

  @HostBinding('attr.viewBox')
  get viewBox(): string {
    return `${this.left} ${this.top} ${this.width} ${this.height}`;
  }
}
