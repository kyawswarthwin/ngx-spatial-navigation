import { Directive, ElementRef, HostListener } from '@angular/core';
// @ts-ignore
import { getNextFocus } from '@bbc/tv-lrud-spatial';

@Directive({
  selector: '[navRoot]',
  standalone: true,
})
export class NavRootDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const element = event.target as HTMLElement;

    if (
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    ) {
      if (
        ['ArrowLeft', 'ArrowRight'].includes(event.key) &&
        [
          'text',
          'password',
          'email',
          'number',
          'search',
          'tel',
          'url',
        ].includes(element.getAttribute('type')!)
      ) {
        return;
      }

      event.preventDefault();

      const nextFocus = getNextFocus(
        element,
        event.keyCode,
        this.el.nativeElement
      );
      if (nextFocus) {
        nextFocus.focus();
        nextFocus.scrollIntoView({ block: 'center' });
      }
    }
  }
}
