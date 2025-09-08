// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'roadmap/:link',
    renderMode: RenderMode.Server  // Use SSR instead of prerendering
  }
];
