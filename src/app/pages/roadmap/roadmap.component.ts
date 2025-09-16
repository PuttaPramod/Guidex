import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Roadmap {
  link: string;
  title: string;
  color: string;
  steps: string[];
}

@Component({
  selector: 'app-roadmap',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  mainColor = '#0d6efd'; // Default – override in ngOnInit if desired

ngOnInit(): void {
  const link = this.route.snapshot.paramMap.get('link')!;
  this.selected = this.roadmaps.find(r => r.link === link);
  if (!this.selected) {
    this.router.navigate(['/']);
    return;
  }
  // You can expand color options:
  const colorMap: any = {
    primary: '#0d6efd',
    success: '#198754',
    warning: '#ffc107',
    secondary: '#6c757d',
    info: '#17a2b8',
    dark: '#212529',
    danger: '#dc3545',
    purple: '#8f3abb'
  };
  this.mainColor = colorMap[this.selected.color] || '#0d6efd';
}

cardBg(i: number): string {
  // alternate light shades
  return i % 2 === 0 ? '#f4f8fc' : '#eaf6f1';
}
fontColor(i: number): string {
  return '#222';
}
stepIcon(i: number): string {
  // sample icons for steps—customize as needed
  const icons = [
    'bi-flag', 'bi-book', 'bi-lightbulb', 'bi-journal-check', 'bi-mortarboard', 'bi-award', 'bi-trophy'
  ];
  return icons[i % icons.length];
}

  roadmaps = [
  {
    link: 'engineering',
    title: 'Engineering or Pure Sciences',
    color: 'primary',
    steps: [
      'Complete 10th Class',
      'Choose Science (MPC) in 11th and 12th',
      'Prepare for Engineering Entrance Exams (e.g., JEE)',
      'Appear for 12th Board Exams',
      'Clear Engineering Entrance Exam',
      'Enroll in a B.Tech/B.E. Program',
      'Graduate and start engineering career or higher studies'
    ]
  },
  {
    link: 'science',
    title: 'Research or Technology',
    color: 'info',
    steps: [
      'Complete 10th Class',
      'Select Science Stream with focus on Physics, Chemistry, and Biology',
      'Develop critical thinking and problem-solving skills',
      'Participate in science fairs and research projects',
      'Complete 11th and 12th Board Exams',
      'Enroll in undergraduate science/technology courses (B.Sc, B.Tech)',
      'Pursue research or technology careers or higher education'
    ]
  },
  {
    link: 'medical',
    title: 'Medical or Biology Streams',
    color: 'success',
    steps: [
      'Complete 10th Class',
      'Select Science (BiPC) in 11th and 12th',
      'Prepare for Medical Entrance Exams (e.g., NEET)',
      'Appear for 12th Board Exams',
      'Clear Medical Entrance Exam',
      'Join MBBS/BDS or Allied Health Sciences Course',
      'Complete medical/paramedical education and start career'
    ]
  },
  {
    link: 'commerce',
    title: 'Commerce and Business',
    color: 'warning',
    steps: [
      'Complete 10th Class',
      'Select Commerce Stream in 11th and 12th',
      'Choose core subjects like Accountancy, Economics, Business Studies',
      'Appear for 12th Board Exams',
      'Prepare for professional courses (CA, CMA, CS) or B.Com/BBA',
      'Enroll in commerce/business programs or professional certifications',
      'Start career in finance, accounting, management, or entrepreneurship'
    ]
  },
  {
    link: 'arts',
    title: 'Arts, Design, or Humanities',
    color: 'secondary',
    steps: [
      'Complete 10th Class',
      'Select Arts/Humanities Stream in 11th and 12th',
      'Choose subjects like History, Political Science, Psychology, Design',
      'Appear for 12th Board Exams',
      'Prepare for entrance exams (CLAT, design institutes) if required',
      'Join undergraduate courses in Arts, Design, Law, Journalism, etc.',
      'Pursue careers in civil services, creative arts, media, or academia'
    ]
  },

    {
      link: 'diploma',
      title: 'Polytechnic (Diploma)',
      color: 'dark',
      steps: [
        'Complete 10th Class',
        'Select Diploma Course',
        'Join 3-Year Diploma Program',
        'Complete Diploma with Good Marks',
        'Option 1: Join Job as Junior Engineer',
        'Option 2: Lateral Entry to B.Tech (2nd Year)',
        'Career Growth in Technical Field'
      ]
    },
    {
      link: 'iti',
      title: 'ITI Courses',
      color: 'danger',
      steps: [
        'Complete 10th Class',
        'Choose ITI/Skill Course',
        'Complete 1-2 Year Training',
        'Get Trade Certificate',
        'Apprenticeship/On-Job Training',
        'Join as Skilled Worker',
        'Start Own Business or Career Growth'
      ]
    },
    {
      link: 'vocational',
      title: 'Vocational Courses',
      color: 'info',
      steps: [
        'Complete 10th Class',
        'Select Vocational Course',
        'Undertake Practical & Theory Training',
        'Appear in Certification Exams',
        'Get Certified',
        'Start Career or Entrepreneurship'
      ]
    },
    {
      link: 'paramedical',
      title: 'Paramedical Courses',
      color: 'success',
      steps: [
        'Complete 10th Class',
        'Select Paramedical Course',
        'Undertake Practical & Theory Training',
        'Appear in Certification Exams',
        'Join Healthcare Facility',
        'Advance in Allied Health Career'
      ]
    },
    {
      link: 'fine-arts',
      title: 'Fine & Performing Arts',
      color: 'purple',
      steps: [
        'Complete 10th Class',
        'Develop Creative Portfolio',
        'Select Arts Stream in 11th/12th',
        'Join BA/Fine Arts/Music/Dance',
        'Complete Degree with Projects',
        'Start Artistic Professional Career'
      ]
    },
    {
      link: 'open-schooling',
      title: 'Open Schooling (NIOS)',
      color: 'primary',
      steps: [
        'Enroll in NIOS after 10th',
        'Choose Desired Subjects',
        'Complete Courses via Distance Mode',
        'Appear in Board Exams',
        'Obtain NIOS Certificate',
        'Pursue Further Education/Career'
      ]
    }
  ];
  

  selected?: Roadmap;

  constructor(private route: ActivatedRoute, public router: Router) {}


  
}
