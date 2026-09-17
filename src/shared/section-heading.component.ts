import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

/**
 * Shared section heading: mono eyebrow pill, display title and gradient rule.
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-14 md:mb-16" appReveal>
      <span class="eyebrow-pill mb-5">
        <span class="h-1 w-1 rounded-full bg-cyan-400"></span>
        {{ eyebrow() }}
      </span>
      <h2
        class="font-display text-3xl font-bold tracking-tight text-white md:text-[2.6rem] md:leading-[1.15]"
      >
        {{ title() }}
      </h2>
      <div
        class="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 via-sky-500 to-transparent"
      ></div>
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
}
