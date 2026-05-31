export const site = {
  name: 'Rohit Chavan',
  role: 'Software Engineer',
  /** One-line positioning statement used in the hero + meta description. */
  tagline: 'I build scalable mobile and cross-platform apps with Kotlin.',
  description:
    'Software Engineer with 4 years of experience building scalable mobile and cross-platform applications. Kotlin, Jetpack Compose, Kotlin Multiplatform, and strong CS fundamentals.',
  location: 'Bengaluru, India',
  email: 'crohitp9@gmail.com',
  phone: '+91 9975064095',
  resumeUrl: '/resume.pdf',
  url: 'https://rroohit.github.io',
  /**
   * Web3Forms access key powers the contact form (https://web3forms.com).
   * Replace this placeholder with your free key — submissions land in your inbox.
   */
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;

export type SocialLink = {
  name: string;
  label: string;
  url: string;
  /** key used by the Icon component */
  icon: 'github' | 'linkedin' | 'leetcode' | 'mail';
};

export const socials: SocialLink[] = [
  {
    name: 'GitHub',
    label: '@rroohit',
    url: 'https://github.com/rroohit',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    label: 'rohittchavann',
    url: 'https://www.linkedin.com/in/rohittchavann/',
    icon: 'linkedin',
  },
  {
    name: 'LeetCode',
    label: '_rohit____',
    url: 'https://leetcode.com/u/_rohit____/',
    icon: 'leetcode',
  },
  {
    name: 'Email',
    label: 'crohitp9@gmail.com',
    url: 'mailto:crohitp9@gmail.com',
    icon: 'mail',
  },
];

/** Headline stats shown in the hero / stats strip. */
export const stats: { value: string; label: string }[] = [
  { value: '4+', label: 'Years building products' },
  { value: '900+', label: 'LeetCode problems solved' },
  { value: '2', label: 'Open-source libraries' },
  { value: '150+', label: 'GitHub stars earned' },
];

export const navLinks: { label: string; href: string }[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'DSA', href: '/dsa' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];
