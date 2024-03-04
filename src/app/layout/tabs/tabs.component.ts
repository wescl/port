import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  menuOpen: boolean = true;
  menuDisplay: boolean = false;

  constructor(private router: Router, private el: ElementRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async toggleMenu() {
    this.menuOpen = !this.menuOpen;
    await this.delay(100);
    this.menuDisplay =!this.menuDisplay;
  }

  setActiveLink(link: HTMLElement) {
    this.clearActiveLinks();
    link.classList.add('active-link');
  }

  private clearActiveLinks() {
    const links = this.el.nativeElement.querySelectorAll('a');
    links.forEach((link: HTMLElement) => {
      link.classList.remove('active-link');
    });
  }

  private updateActiveLink() {
    const currentUrl = this.router.url;
    const links = this.el.nativeElement.querySelectorAll('a');

    links.forEach((link: HTMLElement) => {
      if (link.getAttribute('routerLink') === currentUrl) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
}
