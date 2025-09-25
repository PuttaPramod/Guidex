import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet,RouterModule, NavigationEnd, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('future-guidelines');
  currentYear = new Date().getFullYear();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Only run this block in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo(0, 0);
        });
    }
  }
}
