export const site = {
  name: 'Ehsan',
  alias: 'DeDeadend',
  role: 'Android Software Engineer',
  description: 'I build Android software with a focus on system-level behavior, performance, and deep platform control.',
  bio: 'I work across the Android stack, with a particular interest in the layers where software meets the system. From Root, Shizuku, and system customization to performance-focused tooling, I build practical software that stays fast, focused, and maintainable.',
  github: 'https://github.com/dedeadend',
  telegram: 'https://t.me/dedeadend'
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
    name: 'KillMyApps',
    description: 'A lightweight system utility for fast, controlled app termination.',
    href: '/apps/killmyapps/',
    tags: ['Android', 'Open Source']
  },
  {
    name: 'DTerminal',
    description: 'A modern Android terminal with native shell access and an embedded Python runtime.',
    href: 'https://github.com/dedeadend/DTerminal',
    external: true,
    tags: ['Android', 'Python', 'Compose']
  },
  {
    name: 'EvilFont',
    description: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.',
    href: 'https://github.com/dedeadend/EvilFont',
    external: true,
    tags: ['Root', 'Magisk', 'KernelSU', 'APatch']
  }
];

export const about = {
  years: '7+ years',
  title: 'Android Software Engineer',
  focus: 'Android development across the stack, with a strong interest in system layers, Root, Shizuku, performance, and platform customization.',
  stack: ['Kotlin', 'Java', 'C', 'C++', 'Python', 'Bash', 'Jetpack Compose', 'Android SDK', 'Android NDK'],
  architecture: ['Clean Architecture', 'MVI', 'MVVM', 'UDF', 'Hilt', 'Coroutines', 'Flow', 'Multithreading']
};
