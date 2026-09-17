import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface ContactMethod {
  icon: 'mail' | 'phone' | 'pin';
  title: string;
  value: string;
  href: string;
  copyable: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective]
})
export class ContactComponent {
  copiedKey = signal<string | null>(null);
  private resetTimer: ReturnType<typeof setTimeout> | null = null;

  contactMethods = signal<ContactMethod[]>([
    {
      icon: 'mail',
      title: 'Email',
      value: 'ahmedhsnhero2014@gmail.com',
      href: 'mailto:ahmedhsnhero2014@gmail.com',
      copyable: true
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+20 101 585 5016',
      href: 'tel:+201015855016',
      copyable: true
    },
    {
      icon: 'pin',
      title: 'Location',
      value: 'Cairo, Egypt',
      href: '',
      copyable: false
    }
  ]);

  async copyToClipboard(method: ContactMethod): Promise<void> {
    try {
      await navigator.clipboard.writeText(method.value);
      this.copiedKey.set(method.title);
      if (this.resetTimer) clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copiedKey.set(null), 2000);
    } catch {
      // Clipboard unavailable (permissions/insecure context) — no-op, link still works.
    }
  }
}
