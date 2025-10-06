
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/home"
  },
  {
    "renderMode": 0,
    "route": "/quiz"
  },
  {
    "renderMode": 0,
    "route": "/streams"
  },
  {
    "renderMode": 0,
    "route": "/after"
  },
  {
    "renderMode": 0,
    "route": "/roadmap/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5396, hash: 'c9573ef8a1c21f9d58fe23a5231586a7279abbe473b76861e16279c9ea09d6fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: '37e35710088f9c2d976cda0e46a3a783b4d85a2dcfeea31fa98d9c95ed107430', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IP3RSR46.css': {size: 391704, hash: 'WRqs80OnQFA', text: () => import('./assets-chunks/styles-IP3RSR46_css.mjs').then(m => m.default)}
  },
};
