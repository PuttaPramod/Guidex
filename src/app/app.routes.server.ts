import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'roadmap/:link',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Define all the roadmap links you want to prerender
      return [
        { link: 'getting-started' },
        { link: 'advanced-guide' },
        { link: 'deployment' },
        { link: 'troubleshooting' },
        // Add more roadmap links as needed
      ];
    }
  }
];
