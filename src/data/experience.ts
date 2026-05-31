export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: 'Field Circle',
    role: 'Software Engineer — Android',
    period: 'Nov 2024 — Present',
    summary:
      'Own end-to-end Android and cross-platform development for enterprise field-service products.',
    highlights: [
      'Owned end-to-end development of Zapium (formerly FieldCircle), a full-scale Android app serving field operations teams — work orders, inspections, real-time location tracking, timesheets, and asset management — driving feature development, testing, and multi-environment release management.',
      'Designed scalable architecture using MVVM and Clean Architecture, improving code maintainability and modularity.',
      'Led migration of a legacy Java codebase to Kotlin, reducing boilerplate and improving developer productivity.',
      'Built a cross-platform mobile app (Android + iOS) for HyTorc using Kotlin Multiplatform and Compose Multiplatform, sharing 95% of the codebase.',
      'Collaborated with backend, product, and design teams to deliver production-grade features across multiple environments.',
    ],
    tech: ['Kotlin', 'Compose Multiplatform', 'KMP', 'MVVM', 'Clean Architecture', 'Ktor', 'Koin'],
  },
  {
    company: 'Baatu Technologies',
    role: 'Android Developer',
    period: 'May 2022 — Oct 2024',
    summary:
      'Built and maintained Android apps with a focus on scalability, performance, and system-level integrations.',
    highlights: [
      'Developed and maintained multiple Android applications with a focus on scalability, performance, and maintainability.',
      'Implemented features involving background processing, inter-process communication (AIDL), and system-level integrations.',
      'Built screen-time and parental-control features using WorkManager, Services, and Content Providers.',
      'Improved app stability and compatibility across a wide range of Android devices and screen sizes.',
      'Collaborated in agile teams to deliver features with high code quality and maintainability.',
    ],
    tech: ['Kotlin', 'Coroutines', 'WorkManager', 'AIDL', 'Room', 'Content Providers', 'MVVM'],
  },
];

export const education = {
  school: 'Dr. Babasaheb Ambedkar Technological University',
  degree: 'B.Tech, Computer Science',
  period: '2021',
  detail: 'CGPA 7.0',
};

export const achievements: string[] = [
  'Led development of a production-grade enterprise Android application (Zapium).',
  'Built a cross-platform system with 95% shared code using Kotlin & Compose Multiplatform.',
  'Developed and open-sourced a Jetpack Compose image-cropping library.',
  'Solved 900+ algorithmic problems on LeetCode — specializing in graph algorithms, dynamic programming, and advanced data structures, consistently optimizing for time and space.',
];
