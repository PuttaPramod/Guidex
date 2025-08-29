import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Stream } from '../../models/stream';

@Component({
  selector: 'app-streams',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class Streams implements OnInit {
  streams: (Stream & { link: string })[] = [
    {
      link: 'engineering',
      name: 'Science (MPC)',
      description: 'Physics, Chemistry & Maths—foundation for engineering.',
      coreSubjects: 'MPC, Computer Science',
      specialization: ['Mechanical', 'Civil', 'ECE', 'CSE'],
      careers: ['Engineer', 'Architect', 'Data Scientist', 'Pilot'],
      topColleges: ['IITs', 'NITs', 'BITS Pilani'],
      icon: 'bi-cpu',
      color: '#2062af'
    },
    {
      link: 'medical',
      name: 'Science (BiPC)',
      description: 'Biology, Chemistry & Physics—path to medicine.',
      coreSubjects: 'BiPC, English',
      specialization: ['MBBS', 'BDS', 'Pharmacy', 'Nursing'],
      careers: ['Doctor', 'Biotechnologist', 'Pharmacist', 'Veterinarian'],
      topColleges: ['AIIMS', 'JIPMER', 'CMC Vellore'],
      icon: 'bi-heart-pulse',
      color: '#2ecc71'
    },
    {
      link: 'commerce',
      name: 'Commerce',
      description: 'Accounts, Business Studies & Economics.',
      coreSubjects: 'Accountancy, Economics, BST, Maths(opt)',
      specialization: ['CA', 'CFA', 'Business Analytics'],
      careers: ['Chartered Accountant', 'Banker', 'Economist', 'Entrepreneur'],
      topColleges: ['SRCC', 'Loyola', 'Christ University'],
      icon: 'bi-cash-stack',
      color: '#e67e22'
    },
    {
      link: 'arts',
      name: 'Arts / Humanities',
      description: 'Social sciences, literature, law & creative fields.',
      coreSubjects: 'History, Political Science, Sociology, Psychology',
      specialization: ['Law', 'Psychology', 'Design'],
      careers: ['Teacher', 'Civil Servant', 'Journalist', 'Designer'],
      topColleges: ['St. Stephen’s', 'LSR', 'JNU'],
      icon: 'bi-journal-bookmark',
      color: '#9b59b6'
    },
    {
      link: 'diploma',
      name: 'Polytechnic (Diploma)',
      description: '3-year technical diploma programs.',
      coreSubjects: 'Applied Science, Engineering Fundamentals',
      specialization: ['Civil', 'Mechanical', 'Electrical', 'CS'],
      careers: ['Junior Engineer', 'Technician', 'Supervisor'],
      topColleges: ['State Polytechnics'],
      icon: 'bi-building',
      color: '#34495e'
    },
    {
      link: 'iti',
      name: 'ITI Courses',
      description: 'Vocational training in trades (electrician, fitter…).',
      coreSubjects: 'Practical Trade Skills',
      specialization: ['Electrician', 'Welder', 'Mechanic'],
      careers: ['Electrician', 'Fitter', 'Technician'],
      topColleges: ['Govt & Private ITIs'],
      icon: 'bi-tools',
      color: '#d35400'
    },
    {
      link: 'vocational',
      name: 'Vocational Courses',
      description: 'Skill-based courses in hospitality, fashion, IT.',
      coreSubjects: 'Practical & Theory',
      specialization: ['Hotel Mgmt', 'Fashion Design', 'Retail', 'IT'],
      careers: ['Hospitality Manager', 'Designer', 'Technician'],
      topColleges: ['NSQF Institutes'],
      icon: 'bi-briefcase',
      color: '#16a085'
    },
    {
      link: 'paramedical',
      name: 'Paramedical Courses',
      description: 'Allied healthcare roles training.',
      coreSubjects: 'Medical Science Fundamentals',
      specialization: ['DMLT', 'Radiography', 'ECG Tech'],
      careers: ['Lab Technician', 'X-Ray Tech', 'Nursing Asst'],
      topColleges: ['Paramedical Institutes'],
      icon: 'bi-activity',
      color: '#27ae60'
    },
    {
      link: 'fine-arts',
      name: 'Fine & Performing Arts',
      description: 'Drawing, painting, music, dance, theatre.',
      coreSubjects: 'Creative Art Practice',
      specialization: ['Painting', 'Sculpture', 'Dance', 'Animation'],
      careers: ['Artist', 'Musician', 'Animator'],
      topColleges: ['Fine Arts Colleges'],
      icon: 'bi-palette',
      color: '#8e44ad'
    },
    {
      link: 'open-schooling',
      name: 'Open Schooling (NIOS)',
      description: 'Flexible distance education option.',
      coreSubjects: 'Choose as per stream',
      specialization: ['All streams available'],
      careers: ['Any field (flexible)'],
      topColleges: ['NIOS', 'State Open Schools'],
      icon: 'bi-bookmarks',
      color: '#2980b9'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
