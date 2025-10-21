
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
    'index.csr.html': {size: 5455, hash: 'd96a9cc554f40f57e609180a26f6613d93a16f4d544607e34e22e832a316b7dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1097, hash: '510ff5a5d134c55a60c4d43834bc3b1c760756ccd36e4ef3260392aae2d4f1ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IP3RSR46.css': {size: 391704, hash: 'WRqs80OnQFA', text: () => import('./assets-chunks/styles-IP3RSR46_css.mjs').then(m => m.default)}
  },
};
