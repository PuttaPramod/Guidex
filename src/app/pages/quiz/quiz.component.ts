import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class Quiz implements OnInit {
  quizFinished = false;
  quizResultMessage = '';

  recommendedLink: string | null = null;
  recommendedStream: string | null = null;

  questions = [
  {
    text: 'Which activity excites you the most?',
    options: [
      { label: 'Solving math puzzles and equations', score: 9 },            // Science (MPC)
      { label: 'Conducting biology experiments', score: 8 },                // Science (BiPC)
      { label: 'Managing money or budget planning', score: 7 },             // Commerce
      { label: 'Writing poetry or stories', score: 6 },                     // Arts/Humanities
      { label: 'Building models or using machines', score: 5 },             // Polytechnic
      { label: 'Repairing electrical gadgets', score: 4 },                  // ITI
      { label: 'Organizing school/group events', score: 3 },                // Vocational
      { label: 'Assisting in First Aid or health camps', score: 2 },        // Paramedical
      { label: 'Drawing, music, dance or acting', score: 1 },
      { label: 'Others', score: 0}                // Fine Arts
    ]
  },
  {
    text: 'Choose the subject you would love to study daily:',
    options: [
      { label: 'Mathematics', score: 9 },
      { label: 'Biology', score: 8 },
      { label: 'Economics', score: 7 },
      { label: 'History', score: 6 },
      { label: 'Engineering Drawing', score: 5 },
      { label: 'Workshop Practice', score: 4 },
      { label: 'Computer Applications', score: 3 },
      { label: 'Pharmacology', score: 2 },
      { label: 'Painting or Performing Arts', score: 1 },
      { label: 'Others', score: 1}
    ]
  },
  {
    text: 'Which future career do you find most attractive?',
    options: [
      { label: 'Software Engineer or Scientist', score: 9 },
      { label: 'Doctor, Nurse, or Veterinarian', score: 8 },
      { label: 'Chartered Accountant or Bank Officer', score: 7 },
      { label: 'Lawyer, Civil Servant, or Journalist', score: 6 },
      { label: 'Technician or Junior Engineer', score: 5 },
      { label: 'Machinist or Trades Specialist', score: 4 },
      { label: 'Fashion Designer or Chef', score: 3 },
      { label: 'Lab Technician or X-ray assistant', score: 2 },
      { label: 'Musician, Dancer, or Actor', score: 1 },
      { label: 'Others', score: 0}
    ]
  },
  {
    text: 'Which environment do you prefer for your work or study?',
    options: [
      { label: 'Labs or Math clubs', score: 9 },
      { label: 'Nature parks or Hospitals', score: 8 },
      { label: 'Business offices or banks', score: 7 },
      { label: 'Museums or Libraries', score: 6 },
      { label: 'Workshops or Factories', score: 5 },
      { label: 'Industrial sites', score: 4 },
      { label: 'Hotels or Studios', score: 3 },
      { label: 'Clinics or Diagnostics labs', score: 2 },
      { label: 'Art studios or Theatres', score: 1 },
      { label: 'Others', score: 1}
    ]
  },
  {
    text: 'Which is your strongest skill area?',
    options: [
      { label: 'Abstract & logical thinking', score: 9 },
      { label: 'Observation & care for living things', score: 8 },
      { label: 'Data analysis & calculations', score: 7 },
      { label: 'Creative writing or expression', score: 6 },
      { label: 'Technical drawing or measurements', score: 5 },
      { label: 'Practical troubleshooting', score: 4 },
      { label: 'Service & hospitality', score: 3 },
      { label: 'Medical assisting', score: 2 },
      { label: 'Artistic ability', score: 1 },
      { label: 'Others', score: 0}
    ]
  },
  {
    text: 'If you could win a prize, which would you prefer?',
    options: [
      { label: 'Best at Math Olympiad', score: 9 },
      { label: 'Life Science Research Award', score: 8 },
      { label: 'Business Plan Competition', score: 7 },
      { label: 'Literary Festival Winner', score: 6 },
      { label: 'Innovation in Tools Award', score: 5 },
      { label: 'Best Mechanic/Technician', score: 4 },
      { label: 'Best Customer Support/Host', score: 3 },
      { label: 'Community Health Service', score: 2 },
      { label: 'Best Performer or Artist', score: 1 },
      { label: 'Others', score: 1}
    ]
  },
  {
    text: 'Which elective would you pick if all were available?',
    options: [
      { label: 'Advanced Mathematics', score: 9 },
      { label: 'Human Anatomy', score: 8 },
      { label: 'Business Studies', score: 7 },
      { label: 'Philosophy or Sociology', score: 6 },
      { label: 'Computer Hardware', score: 5 },
      { label: 'Vehicle Maintenance', score: 4 },
      { label: 'Event Management', score: 3 },
      { label: 'Lab Technology', score: 2 },
      { label: 'Classical Dance', score: 1 },
      { label: 'Others', score: 0}
    ]
  },
  {
    text: 'Which of these would you volunteer for?',
    options: [
      { label: 'Organize Science Fair', score: 9 },
      { label: 'Botanical Garden Trip', score: 8 },
      { label: 'School Commerce Club', score: 7 },
      { label: 'Drama/Speech Club', score: 6 },
      { label: 'Robotics Workshop', score: 5 },
      { label: 'Repair School Equipment', score: 4 },
      { label: 'School Annual Day (service tasks)', score: 3 },
      { label: 'Health Awareness Camp', score: 2 },
      { label: 'Art & Craft Festival', score: 1 },
      { label: 'Others', score: 1}
    ]
  },
  {
    text: 'If you could shadow a professional for a day, who would it be?',
    options: [
      { label: 'Data Scientist', score: 9 },
      { label: 'Doctor', score: 8 },
      { label: 'Bank Manager', score: 7 },
      { label: 'News Editor', score: 6 },
      { label: 'Civil Engineer', score: 5 },
      { label: 'Electrician', score: 4 },
      { label: 'Hotel Manager', score: 3 },
      { label: 'Radiographer', score: 2 },
      { label: 'Film Director', score: 1 },
      { label: 'Others', score: 0}
    ]
  }
];


  currentIndex = 0;
  totalScore = 0;
  selectedOption: any = null;
String: any;

  ngOnInit() {}

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  submitAnswer() {
    if (this.selectedOption) {
      this.totalScore += this.selectedOption.score;
      this.selectedOption = null;

      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      } else {
        this.quizFinished = true;
        this.computeRecommendation();
        this.quizResultMessage = `${this.recommendedStream}`;
      }
    }
  }

  computeRecommendation() {
  if (this.totalScore >= 73 && this.totalScore <=81) { // 31-35
    this.recommendedStream = 'Science (MPC)';
    this.recommendedLink = 'engineering';
  } else if (this.totalScore >= 64 && this.totalScore <=72) { // 27-30
    this.recommendedStream = 'Science (BiPC)';
    this.recommendedLink = 'medical';
  } else if (this.totalScore >= 55 && this.totalScore <=63) { // 24-26
    this.recommendedStream = 'Commerce';
    this.recommendedLink = 'commerce';
  } else if (this.totalScore >= 46 && this.totalScore <=54) { // 20-23
    this.recommendedStream = 'Arts / Humanities';
    this.recommendedLink = 'arts';
  } else if (this.totalScore >= 37 && this.totalScore <=45) { // 17-19
    this.recommendedStream = 'Polytechnic (Diploma)';
    this.recommendedLink = 'diploma';
  } else if (this.totalScore >= 28 && this.totalScore <=36) { // 14-16
    this.recommendedStream = 'ITI Courses';
    this.recommendedLink = 'iti';
  } else if (this.totalScore >= 19 && this.totalScore <=27) { // 11-13
    this.recommendedStream = 'Vocational Courses';
    this.recommendedLink = 'vocational';
  } else if (this.totalScore >= 10 && this.totalScore <=18) { // 8-10
    this.recommendedStream = 'Paramedical Courses';
    this.recommendedLink = 'paramedical';
  } else if (this.totalScore === 9) { // 5-7
    this.recommendedStream = 'Fine & Performing Arts';
    this.recommendedLink = 'fine-arts';
  } else { // 0-4
    this.recommendedStream = 'Open Schooling (NIOS)';
    this.recommendedLink = 'open-schooling';
  }
}



  resetQuiz() {
    this.currentIndex = 0;
    this.totalScore = 0;
    this.selectedOption = null;
    this.recommendedStream = null;
    this.recommendedLink = null;
    this.quizFinished = false;
    this.quizResultMessage = '';
  }

  viewRoadmap() {
    if (this.recommendedLink) {
      this.router.navigate(['/roadmap', this.recommendedLink]);
    }
  }

  constructor(private router: Router) {}
}
