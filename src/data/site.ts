export const site = {
  name: 'Ehsan Nasiri',
  alias: 'DeDeadend',
  role: 'Android Software Engineer',
  description: 'Android software engineer focused on application development, system tooling, and Android platform integration.',
  bio: 'I work across Android application and system-facing code, from Compose and application architecture to Root, Shizuku, native tooling, and performance work.',
  github: 'https://github.com/dedeadend',
  telegram: 'https://t.me/dedeadend',
  email: 'de2deadend@gmail.com'
};

export const apps = [
  {
    slug: 'killmyapps',
    name: 'KillMyApps',
    tagline: 'A focused Android utility for terminating selected applications.',
    description: 'KillMyApps provides a direct way to terminate selected Android applications through Root or Shizuku. The project is intentionally centered on process termination rather than broader device or app management.',
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
    slug: 'killmyapps', name: 'KillMyApps', description: 'A focused Android utility for terminating selected applications through Root or Shizuku.', href: '/projects/killmyapps/', external: false, featured: true, status: 'Active', category: 'Android Utility', github: 'https://github.com/dedeadend/KillMyApps', tags: ['Android', 'Root', 'Shizuku', 'Open Source']
  },
  {
    slug: 'dterminal', name: 'DTerminal', description: 'An Android terminal with native shell execution and an embedded Python runtime.', href: '/projects/dterminal/', external: false, featured: false, status: 'Active', category: 'Android Tool', github: 'https://github.com/dedeadend/DTerminal', tags: ['Android', 'Python', 'Compose', 'Terminal']
  },
  {
    slug: 'evilfont', name: 'EvilFont', description: 'A systemless font and emoji module for Magisk, KernelSU, and APatch.', href: '/projects/evilfont/', external: false, featured: false, status: 'Active', category: 'System Module', github: 'https://github.com/dedeadend/EvilFont', tags: ['Root', 'Magisk', 'KernelSU', 'APatch']
  }
];

export const projectDetails = {
  dterminal: {
    eyebrow: 'Android Tool · Terminal', title: 'DTerminal', version: 'v2.0', github: 'https://github.com/dedeadend/DTerminal', releases: 'https://github.com/dedeadend/DTerminal/releases',
    summary: 'An Android terminal with native shell execution and an embedded Python runtime.',
    overview: 'DTerminal is an Android terminal for developers and power users who need shell access and Python without moving to a separate environment. It combines command execution, history, script storage, and an embedded Python runtime in a single application.',
    problem: 'Android exposes a shell, but using it as a small development environment often means combining a terminal, a script store, and a separate Python setup. DTerminal brings those pieces into an Android-native workflow.',
    approach: [
      ['Native shell access', 'Execute Android shell commands while keeping process state and output under the application workflow.'],
      ['Embedded Python', 'Bundle Python 3.13 through Chaquopy for running scripts directly on the device.'],
      ['Runtime packages', 'Provide a pip-style workflow for installing pure-Python packages from PyPI at runtime.'],
      ['Persistent workspace', 'Store scripts and command history with Room so the working state survives app restarts.']
    ],
    architecture: 'The project uses Clean Architecture with an MVI and Unidirectional Data Flow approach. Hilt handles dependency injection, while Coroutines and Flow coordinate asynchronous shell, database, and runtime operations.',
    system: 'DTerminal sits close to the Android shell rather than treating command execution as an ordinary application API. Process handling, threading, lifecycle, and privileged access are therefore part of the design.',
    releaseHistory: [
      ['v2.0', 'Embedded Python 3.13, added the native py command, external Python script execution, multi-line text selection, expanded custom commands, MVI migration, and Android 11 minimum support.'],
      ['v1.2', 'Added the def value to the font command, updated the GitHub repository link, and reduced terminal log spacing.'],
      ['v1.1', 'Refined the terminal workflow and addressed fixes following the initial release.']
    ]
  },
  evilfont: {
    eyebrow: 'System Module · Root', title: 'EvilFont', version: 'v2.1', github: 'https://github.com/dedeadend/EvilFont', releases: 'https://github.com/dedeadend/EvilFont/releases',
    summary: 'A font and emoji module for rooted Android devices, supporting Magisk, KernelSU, and APatch.',
    overview: 'EvilFont lets rooted Android users customize system fonts and emoji with an interactive installer. It focuses on a small set of visual resources and keeps the selection process inside the module installation flow.',
    problem: 'Changing system fonts and emoji can involve manual resource replacement and repeated setup. EvilFont packages the available resources into a guided installer so the user can choose what to apply during installation.',
    approach: [
      ['Interactive installer', 'Use the device volume keys to move through the installer and confirm selections without relying on a keyboard or touch input.'],
      ['Multiple root platforms', 'Support Magisk, KernelSU, and APatch for different rooted Android environments.'],
      ['Modular selection', 'Choose a font, an Apple emoji pack, or both in the same installation flow.'],
      ['Curated resources', 'Include 14 Persian and Arabic font variants together with iOS 18.4 and macOS 26 Apple emoji packs.']
    ],
    architecture: 'The installer keeps the selection logic in the module setup flow instead of requiring a separate application UI. Volume-key navigation makes the same interaction available on devices where keyboard input is not practical.',
    system: 'EvilFont works through the root module layer and applies the selected font and emoji resources to the Android environment. Reinstalling the module lets the user make a different selection later.',
    releaseHistory: [
      ['v2.1', 'Added Vazirmatn_Round_Dots, updated Vazirmatn font files, and updated the macOS 26 emoji pack.'],
      ['v2.0', 'Added the interactive installer, 13 open-source fonts, iOS 18.4 and macOS 26 emoji packs, modular selection, and replaced the legacy single-font pack.'],
      ['v1.2', 'Optimized font files and removed unnecessary module files.'],
      ['v1.1', 'Initial released module version.']
    ]
  }
};

export const about = {
  years: '7 years', title: 'Android Software Engineer', focus: 'Android development across the application and system layers, with an emphasis on platform access, performance, automation, and maintainable code.',
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