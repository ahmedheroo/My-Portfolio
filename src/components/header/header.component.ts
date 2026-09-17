import { Component, ChangeDetectionStrategy, signal, effect, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('');

  navLinks = [
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#contact', id: 'contact', label: 'Contact' }
  ];

  private sectionObserver?: IntersectionObserver;

  constructor() {
    effect(() => {
      document.body.style.overflow = this.navOpen() ? 'hidden' : 'auto';
    });

    if (typeof IntersectionObserver !== 'undefined') {
      this.sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        // A thin horizontal band just below the header: whichever section
        // crosses it becomes the active one.
        { rootMargin: '-38% 0px -55% 0px', threshold: 0 }
      );
    }
  }

  ngAfterViewInit(): void {
    if (!this.sectionObserver) return;
    for (const link of this.navLinks) {
      const el = document.getElementById(link.id);
      if (el) this.sectionObserver.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
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

  isActive(href: string): boolean {
    return this.activeSection() === href.slice(1);
  }
}
