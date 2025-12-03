
import { Component, ChangeDetectionStrategy, signal, effect, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navOpen = signal(false);
  isScrolled = signal(false);

  navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  constructor() {
    effect(() => {
      if (this.navOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleNav() {
    this.navOpen.update(open => !open);
  }

  closeNav() {
    this.navOpen.set(false);
  }
}
