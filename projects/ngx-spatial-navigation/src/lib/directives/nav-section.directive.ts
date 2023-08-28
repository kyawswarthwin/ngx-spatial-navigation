import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    AfterContentInit, ContentChildren, Directive, ElementRef, Input, OnChanges, QueryList, Renderer2
} from '@angular/core';

import { NavFocusableDirective } from './nav-focusable.directive';

@Directive({
  selector: '[navSection]',
  standalone: true,
})
export class NavSectionDirective implements OnChanges, AfterContentInit {
  @Input()
  get ignore(): boolean {
    return this._ignore;
  }
  set ignore(value: BooleanInput) {
    this._ignore = coerceBooleanProperty(value);
  }
  private _ignore: boolean = false;
  @Input()
  get focus(): boolean {
    return this._focus;
  }
  set focus(value: BooleanInput) {
    this._focus = coerceBooleanProperty(value);
  }
  private _focus: boolean = false;

  @ContentChildren(NavFocusableDirective, {
    descendants: true,
    read: ElementRef,
  })
  focusables!: QueryList<ElementRef>;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'lrud-container');
  }

  ngOnChanges() {
    if (this.ignore) {
      this.renderer.addClass(this.el.nativeElement, 'lrud-ignore');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'lrud-ignore');
    }
  }

  ngAfterContentInit() {
    if (!this.ignore && this.focus) {
      setTimeout(() => {
        this.focusables.first?.nativeElement.focus();
      }, 500);
    }
  }
}
