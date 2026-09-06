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
    github: 'https://github.com/dedeadend/KillMyApps',
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

export const projectDetails = {
  dterminal: {
    eyebrow: 'Android Tool · Terminal',
    title: 'DTerminal',
    summary: 'A modern Android terminal that combines native shell execution with an embedded Python runtime.',
    overview: 'DTerminal is built for developers and power users who want a capable terminal environment directly on Android. The project combines ordinary shell commands, root-capable execution, persistent history, and a real Python runtime without making the application feel like a desktop terminal port.',
    problem: 'Android provides shell access, but the developer experience around it can be fragmented. A useful mobile terminal needs more than a command prompt: it needs persistent state, package management, script storage, predictable architecture, and a UI that works naturally on a touch device.',
    approach: [
      ['Native shell access', 'Run standard Android shell commands while keeping the execution flow simple and observable.'],
      ['Embedded Python', 'Bundle Python 3.13 through Chaquopy so scripts can run on-device without a separate environment.'],
      ['Runtime packages', 'Provide a pip-style flow for installing pure-Python packages from PyPI at runtime.'],
      ['Persistent workspace', 'Use Room for script and command-history storage so useful terminal state survives sessions.']
    ],
    architecture: 'The project evolved from MVVM toward MVI with Unidirectional Data Flow under Clean Architecture. Hilt handles dependency injection while Coroutines and Flow keep asynchronous shell, database, and runtime operations manageable.',
    system: 'DTerminal sits between the normal Android application layer and the device shell. That makes execution boundaries, threading, process lifecycle, and privileged access important parts of the engineering rather than implementation details hidden behind a standard SDK abstraction.',
    next: 'The direction is to keep the terminal extensible while preserving a focused mobile workflow: fast startup, predictable command execution, useful scripting, and a clean separation between UI state and execution state.'
  },
  evilfont: {
    eyebrow: 'System Module · Root',
    title: 'EvilFont',
    summary: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.',
    overview: 'EvilFont provides a non-destructive way to customize Android typography and emoji presentation without directly modifying the system partition. It targets rooted devices where system-level customization is part of the normal workflow.',
    problem: 'System customization often creates a trade-off between flexibility and safety. Replacing framework resources directly can make updates and recovery harder, while a good root module should be reversible, predictable, and easy to install.',
    approach: [
      ['Systemless deployment', 'Overlay the required system resources through supported root frameworks instead of changing the real system partition.'],
      ['Multiple root platforms', 'Support Magisk, KernelSU, and APatch so the module fits different modern Android root setups.'],
      ['Interactive installer', 'Use a volume-key-driven CLI installer so users can select fonts, emojis, or both during installation.'],
      ['Focused customization', 'Keep the module centered on typography and emoji changes rather than becoming a general customization bundle.']
    ],
    architecture: 'The implementation favors a small module structure with explicit installation choices and minimal persistent state. The installer experience is designed for recovery and root environments where keyboard input may not be available.',
    system: 'The project operates at the root/module layer rather than the application sandbox. The core challenge is preserving the systemless contract: resources are swapped dynamically while the underlying system partition remains untouched.',
    next: 'Future work can continue improving compatibility, installer ergonomics, and resource coverage while keeping the module reversible and intentionally narrow in scope.'
  }
};

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
