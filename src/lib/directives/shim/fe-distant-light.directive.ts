import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

type ElementType = SVGElement;

@Directive({
  selector: 'feDistantLight',
})
export class SvgFeDistantLightDirective {
  constructor(private elementRef: ElementRef<ElementType>) {
  }

  get element(): ElementType {
    return this.elementRef.nativeElement;
  }

  get azimuth(): number {
    return getAttr(this.elementRef, 'azimuth');
  }

  @Input('azimuth')
  set azimuth(value: number) {
    setAttr(this.elementRef, 'azimuth', value);
  }


  get elevation(): number {
    return getAttr(this.elementRef, 'elevation');
  }

  @Input('elevation')
  set elevation(value: number) {
    setAttr(this.elementRef, 'elevation', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get xmlBase(): string {
    return getAttr(this.elementRef, 'xml:base');
  }

  @Input('xml:base')
  set xmlBase(value: string) {
    setAttr(this.elementRef, 'xml:base', value);
  }


  get xmlLang(): string {
    return getAttr(this.elementRef, 'xml:lang');
  }

  @Input('xml:lang')
  set xmlLang(value: string) {
    setAttr(this.elementRef, 'xml:lang', value);
  }


  get xmlSpace(): string {
    return getAttr(this.elementRef, 'xml:space');
  }

  @Input('xml:space')
  set xmlSpace(value: string) {
    setAttr(this.elementRef, 'xml:space', value);
  }

}
