import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Scroll-reveal directive. Adds the `reveal` class immediately and swaps it
 * for `reveal-visible` the first time the host scrolls into view.
 * Styling lives in styles.css; animation is disabled under reduced motion.
 *
 * Usage: <div appReveal> ... </div>
 *        <div appReveal [revealDelay]="150"> ... </div>
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  readonly revealDelay = input(0, { transform: numberAttribute });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.revealDelay() > 0) {
      node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('reveal-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('reveal-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
