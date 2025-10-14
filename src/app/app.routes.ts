import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Quiz } from './pages/quiz/quiz.component';
import { Streams } from './pages/streams/streams.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { After } from './pages/after/after.component';

export const routes: Routes = [
    { path:'',component: Home }, // Default route
    { path: 'home', component: Home },
  { path: 'quiz', component: Quiz },
  { path: 'streams', component: Streams },
  { path: 'after', component: After },
  { path: 'roadmap/:link', component:RoadmapComponent}// Fallback for other roadmaps,
];