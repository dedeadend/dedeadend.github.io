export const site = {
  name: 'Ehsan Nasiri',
  alias: 'DeDeadend',
  role: 'Android Software Engineer',
  description: 'Android software engineer working on applications, system tools, and Android platform-related projects.',
  bio: 'I work on Android applications and tools, with a particular interest in the parts of the platform that sit closer to the system. Some of my projects involve Root, Shizuku, system customization, and performance work.',
  github: 'https://github.com/dedeadend',
  telegram: 'https://t.me/dedeadend',
  email: 'de2deadend@gmail.com'
};

export const apps = [
  {
    slug: 'killmyapps',
    name: 'KillMyApps',
    tagline: 'An Android utility for terminating selected applications.',
    description: 'KillMyApps provides a direct way to terminate selected Android applications using Root or Shizuku. The project keeps the scope focused on that task rather than becoming a general app manager.',
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
    slug: 'killmyapps', name: 'KillMyApps', description: 'An Android utility for terminating selected applications through Root or Shizuku.', href: '/apps/killmyapps/', external: false, featured: true, status: 'Active', category: 'Android Utility', github: 'https://github.com/dedeadend/KillMyApps', tags: ['Android', 'Root', 'Shizuku', 'Open Source']
  },
  {
    slug: 'dterminal', name: 'DTerminal', description: 'An Android terminal with shell access and an embedded Python runtime.', href: '/projects/dterminal/', external: false, featured: false, status: 'Active', category: 'Android Tool', github: 'https://github.com/dedeadend/DTerminal', tags: ['Android', 'Python', 'Compose', 'Terminal']
  },
  {
    slug: 'evilfont', name: 'EvilFont', description: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.', href: '/projects/evilfont/', external: false, featured: false, status: 'Active', category: 'System Module', github: 'https://github.com/dedeadend/EvilFont', tags: ['Root', 'Magisk', 'KernelSU', 'APatch']
  }
];

export const projectDetails = {
  dterminal: {
    eyebrow: 'Android Tool · Terminal', title: 'DTerminal', version: 'v2.0', github: 'https://github.com/dedeadend/DTerminal', releases: 'https://github.com/dedeadend/DTerminal/releases',
    summary: 'An Android terminal with native shell execution and an embedded Python runtime.',
    overview: 'DTerminal is an Android terminal for developers and power users who need shell commands and Python on the device. It includes command history, script storage, root-capable execution, and a Python runtime.',
    problem: 'Android already exposes a shell, but using it as a development environment can require several separate tools. DTerminal brings command execution, persistent state, and scripting into one Android application.',
    approach: [
      ['Native shell access', 'Run Android shell commands while keeping execution state visible to the application.'],
      ['Embedded Python', 'Bundle Python 3.13 through Chaquopy so scripts can run on-device.'],
      ['Runtime packages', 'Provide a pip-style flow for installing pure-Python packages from PyPI at runtime.'],
      ['Persistent workspace', 'Use Room for scripts and command history so useful state remains between sessions.']
    ],
    architecture: 'The project evolved from MVVM toward MVI with Unidirectional Data Flow under Clean Architecture. Hilt handles dependency injection, while Coroutines and Flow are used for asynchronous shell, database, and runtime operations.',
    system: 'DTerminal sits between the Android application layer and the device shell. Process lifecycle, threading, and privileged access therefore form part of the application design rather than being hidden behind a standard SDK abstraction.',
    releaseHistory: [
      ['v2.0', 'Embedded Python 3.13 runtime, native py command, external Python script execution, multi-line text selection, expanded custom commands, MVI migration, and Android 11 minimum support.'],
      ['v1.2', 'Added the def value to the font command, updated the GitHub repository link, and reduced terminal log spacing.'],
      ['v1.1', 'Updated the terminal workflow and release fixes following the initial release.']
    ]
  },
  evilfont: {
    eyebrow: 'System Module · Root', title: 'EvilFont', version: 'v2.1', github: 'https://github.com/dedeadend/EvilFont', releases: 'https://github.com/dedeadend/EvilFont/releases',
    summary: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.',
    overview: 'EvilFont changes Android fonts and emoji presentation without directly modifying the system partition. It is intended for rooted devices where system-level customization is part of the setup.',
    problem: 'Direct changes to system resources can make updates and recovery harder. A systemless module provides a way to apply the changes while keeping the underlying system partition unchanged.',
    approach: [
      ['Systemless deployment', 'Overlay the required system resources through supported root frameworks instead of modifying the system partition.'],
      ['Multiple root platforms', 'Support Magisk, KernelSU, and APatch for different Android root setups.'],
      ['Interactive installer', 'Use a volume-key-driven CLI installer so choices can be made during installation without keyboard input.'],
      ['Focused customization', 'Keep the module limited to font and emoji changes rather than adding unrelated customization features.']
    ],
    architecture: 'The module uses a small structure with explicit installation choices and limited persistent state. The installer is designed for root and recovery environments where keyboard input may not be available.',
    system: 'The project operates at the root/module layer. Its main constraint is keeping the changes systemless so the original system partition remains untouched.',
    releaseHistory: [
      ['v2.1', 'Added Vazirmatn_Round_Dots, updated Vazirmatn font files, and updated the macOS 26 emoji pack.'],
      ['v2.0', 'Added the interactive installer, 13 open-source fonts, iOS 18.4 and macOS 26 emoji packs, modular selection, and replaced the legacy single-font pack.'],
      ['v1.2', 'Optimized font files for performance and cleaned up unnecessary module files.'],
      ['v1.1', 'Initial released module version.']
    ]
  }
};

export const about = {
  years: '7 years', title: 'Android Software Engineer', focus: 'Android development across the stack, with an interest in system layers, Root, Shizuku, performance, and platform customization.',
  programming: ['Kotlin', 'Java', 'C', 'C++', 'Python', 'Bash'], android: ['Jetpack Compose', 'Android SDK', 'Android NDK', 'Material 3', 'Custom View', 'Background Work', 'Geofencing', 'Location Services', 'Telephony Automation'], architecture: ['Clean Architecture', 'MVI', 'MVVM', 'UDF', 'Hilt', 'Coroutines', 'Flow', 'Multithreading'], data: ['Room Database', 'SQLite', 'Retrofit', 'JSON', 'XML', 'Git', 'Android Studio'], system: ['Root Programming', 'Root Module Development', 'Python Integration (Chaquopy)', 'Shizuku', 'Magisk', 'KernelSU', 'APatch', 'Kernel Tuning', 'Power Management', 'Low Latency Optimization', 'Enterprise Customization', 'B2B Solution', 'Deep Learning'], languages: ['Persian', 'English', 'Turkish']
};

export const experience = [
  { title: 'Barakatel', description: 'An Android application developed for the National Health Counselor Center (4030) to facilitate communication between physicians and patients.' },
  { title: 'Monshi Hamrah', description: 'An Android project for call and SMS automation using location and time filters.' },
  { title: 'MedYar', description: 'A medical assistant app where users can enter basic health information and add medical records using photos or the camera. It analyzes the collected information to summarize the status of different health areas and provide practical guidance on what to watch and what to do next.' },
  { title: 'Wall Crack Detection', description: 'A GAN-based machine learning project for generating and detecting wall cracks.' },
  { title: 'Teaching', description: 'More than 100 programming teaching sessions.' },
  { title: 'University Competitions', description: 'First place in three university-level competitions.' },
  { title: 'FCPC 2019', description: 'Participated in the final stage of the national competition.' }
];
