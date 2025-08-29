import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  guidelines = [
  {
    title: "Understand Your Interests & Strengths",
    detail: "Identify the subjects and activities you truly enjoy. Your passion plays a crucial role in choosing your best-fit stream and future career path."
  },
  {
    title: "Research All Available Streams & Options",
    detail: "Explore Science, Commerce, Arts, as well as technical/vocational, ITI, and polytechnic courses. Don’t limit your knowledge to just your school’s offerings."
  },
  {
    title: "Discuss with Mentors & Parents",
    detail: "Seek advice from teachers, counselors, and your family. Their perspective may help you make a more informed decision."
  },
  {
    title: "Think About Your Career Goals",
    detail: "Envision your long-term aspirations. Some careers require specific subject choices after 10th; plan accordingly."
  },
  {
    title: "Avoid Peer Pressure",
    detail: "Choose your stream based on your abilities and interests, not what your friends or relatives choose."
  },
  {
    title: "Be Open to Vocational & Skill-Based Paths",
    detail: "Courses like ITI, Polytechnic, and other diploma or certificate programs provide early job opportunities and strong foundations in applied skills."
  },
  {
    title: "Stay Positive & Manage Stress",
    detail: "This stage is just one step in your journey, not the entire journey. Stay curious, seek guidance, and trust yourself!"
  }
];

}
