import { CommonModule } from '@angular/common';
import { Component,Inject, PLATFORM_ID,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';


@Component({
  selector: 'app-after',
  imports: [RouterModule,CommonModule],
  templateUrl: './after.component.html',
  styleUrl: './after.component.css'
})
export class After implements OnInit{
  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // 👇 Prevent AOS from running during SSR
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
      });
    }
  }
}
