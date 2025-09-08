
// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'roadmap/:link',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Return all possible values for :link parameter
      return [
        { link: 'engineering' },
    { link: 'science' },
    { link: 'medical' },
    { link: 'commerce' },
    { link: 'arts' },
    { link: 'diploma' },
    { link: 'iti' },
    { link: 'vocational' },
    { link: 'paramedical' },
    { link: 'fine-arts' },
    { link: 'open-schooling' }
      ];
    }
  }
];
