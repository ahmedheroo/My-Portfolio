import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  contactMethods = signal<ContactMethod[]>([
    {
      icon: '<i class="fa-solid fa-envelope"></i>',
      title: 'Email',
      value: 'ahmedhassssan2016@gmail.com',
      href: 'mailto:ahmedhassssan2016@gmail.com'
    },
    {
      icon: '<i class="fa-solid fa-mobile"></i>',
      title: 'Phone',
      value: '01015855016',
      href: 'tel:+201015855016'
    },
    {
      icon: '<i class="fa-solid fa-location-dot"></i>',
      title: 'Location',
      value: 'Giza, Egypt',
      href: '#'
    }
  ]);
}
