export const site = {
  name: 'Ehsan Nasiri',
  alias: 'DeDeadend',
  role: 'Android Software Engineer',
  description: 'Android software engineer focused on system-level behavior, performance, and deep platform control.',
  bio: 'I work across the Android stack, with a particular interest in the layers where software meets the system. From Root, Shizuku, and system customization to performance-focused tooling, I build practical software that stays fast, focused, and maintainable.',
  github: 'https://github.com/dedeadend',
  telegram: 'https://t.me/dedeadend',
  email: 'de2deadend@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/107865626?v=4'
};

export const apps = [
  {
    slug: 'killmyapps',
    name: 'KillMyApps',
    tagline: 'A focused Android utility for quickly terminating background apps.',
    description: 'KillMyApps is built for Android power users who want fast, direct app termination through Root or Shizuku, without turning the tool into a full app manager.',
    status: 'Active',
    featured: true,
    github: 'https://github.com/dedeadend/KillMyApps',
    download: 'https://github.com/dedeadend/KillMyApps/releases/latest',
    version: 'v1.5',
    minAndroid: 'Android 8.0+',
    license: 'GPL-3.0',
    tags: ['Android', 'Root', 'Shizuku', 'Open Source']
  }
];

export const projects = [
  {
    slug: 'killmyapps',
    name: 'KillMyApps',
    description: 'A lightweight system utility for fast, controlled app termination.',
    href: '/apps/killmyapps/',
    external: false,
    featured: true,
    status: 'Active',
    category: 'Android Utility',
    tags: ['Android', 'Root', 'Shizuku', 'Open Source']
  },
  {
    slug: 'dterminal',
    name: 'DTerminal',
    description: 'A modern Android terminal with native shell access and an embedded Python runtime.',
    href: '/projects/dterminal/',
    external: false,
    featured: false,
    status: 'Active',
    category: 'Android Tool',
    github: 'https://github.com/dedeadend/DTerminal',
    tags: ['Android', 'Python', 'Compose', 'Terminal']
  },
  {
    slug: 'evilfont',
    name: 'EvilFont',
    description: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.',
    href: '/projects/evilfont/',
    external: false,
    featured: false,
    status: 'Active',
    category: 'System Module',
    github: 'https://github.com/dedeadend/EvilFont',
    tags: ['Root', 'Magisk', 'KernelSU', 'APatch']
  }
];

export const about = {
  years: '7 years',
  title: 'Android Software Engineer',
  focus: 'Android development across the stack, with a strong interest in system layers, Root, Shizuku, performance, and platform customization.',
  stack: ['Kotlin', 'Java', 'C', 'C++', 'Python', 'Bash', 'Jetpack Compose', 'Android SDK', 'Android NDK', 'Material 3', 'Room', 'SQLite', 'Retrofit', 'Git'],
  architecture: ['Clean Architecture', 'MVI', 'MVVM', 'UDF', 'Hilt', 'Coroutines', 'Flow', 'Multithreading'],
  system: ['Root', 'Shizuku', 'Magisk', 'KernelSU', 'APatch', 'Kernel Tuning', 'Power Management', 'Low Latency Optimization', 'Python Integration'],
  languages: ['Persian', 'English', 'Turkish']
};

export const experience = [
  { title: 'Barakatel', description: 'Android application development, implementation, and testing for publication on Myket.' },
  { title: 'Maneshi Hamrah', description: 'Call and SMS automation based on location and time filters.' },
  { title: 'Wall Crack Detection', description: 'GAN-based machine learning system for training, generating, and detecting wall cracks.' },
  { title: 'Teaching', description: 'More than 100 programming teaching sessions.' },
  { title: 'University Competitions', description: 'First place in three university-level competitions.' },
  { title: 'FCPC 2019', description: 'Reached and participated in the final stage of the national competition.' }
];
