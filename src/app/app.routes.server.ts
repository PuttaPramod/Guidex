// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Root path (redirects or Home component)
  { path: '', renderMode: RenderMode.Server },

  // Static routes
  { path: 'home', renderMode: RenderMode.Server },
  { path: 'quiz', renderMode: RenderMode.Server },
  { path: 'streams', renderMode: RenderMode.Server },

  // Dynamic route with SSR-only mode
  {
    path: 'roadmap/:link',
    renderMode: RenderMode.Server
  }
];
