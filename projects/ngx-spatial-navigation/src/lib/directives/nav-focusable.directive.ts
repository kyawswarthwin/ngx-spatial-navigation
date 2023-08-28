import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[navFocusable]',
  standalone: true,
})
export class NavFocusableDirective implements OnChanges, AfterContentInit {
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

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
  }

  ngOnChanges(): void {
    if (this.ignore) {
      this.renderer.addClass(this.el.nativeElement, 'lrud-ignore');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'lrud-ignore');
    }
  }

  ngAfterContentInit(): void {
    if (!this.ignore && this.focus) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 500);
    }
  }

  @HostListener('focus', ['$event'])
  handleFocus(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    if (element.nodeName.toLowerCase() === 'ion-searchbar') {
      this.el.nativeElement.setFocus();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const element = event.currentTarget as HTMLElement;
    if (event.key === 'Enter') {
      event.preventDefault();
      element.click();
    }
  }
}
