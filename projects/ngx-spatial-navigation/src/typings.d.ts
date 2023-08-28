declare module '@bbc/tv-lrud-spatial' {
  export function getNextFocus(
    currentFocus: HTMLElement,
    keyCode: number,
    scope?: HTMLElement
  ): HTMLElement;
}
