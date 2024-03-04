import { Component } from '@angular/core';

interface Contact {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[] = [
    { icon: 'fa-brands fa-html5', name: '(21) 9 7490-0400' },
  ]
}
