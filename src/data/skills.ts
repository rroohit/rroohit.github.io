export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['Kotlin', 'Java'] },
  {
    category: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'Problem Solving', 'System Design'],
  },
  {
    category: 'Android',
    items: ['Jetpack Compose', 'Android SDK', 'MVVM', 'Clean Architecture'],
  },
  { category: 'Async', items: ['Coroutines', 'Flow', 'RxJava'] },
  { category: 'Networking', items: ['Retrofit', 'Ktor', 'REST APIs'] },
  { category: 'Storage', items: ['Room', 'DataStore', 'SQLDelight', 'SharedPreferences'] },
  {
    category: 'Cross-Platform',
    items: ['Kotlin Multiplatform', 'Compose Multiplatform'],
  },
  { category: 'Tools & DI', items: ['Dagger / Hilt', 'Koin', 'Firebase', 'Git'] },
  { category: 'Collaboration', items: ['GitHub', 'Jira', 'Trello', 'Agile'] },
];
