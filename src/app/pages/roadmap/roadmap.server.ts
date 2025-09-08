// src/app/pages/roadmap/+page.server.ts
export function getPrerenderParams() {
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
